import AddEvent from "../models/addEvent.js";
import { setupEmailTransporter } from "../utils/email.js";
import moment from "moment";

export const eventController = async (req, res) => {
  try {
    const {
      eventName,
      eventTitle,
      eventType,
      eventTopic,
      eventSubTopic,
      country,
      state,
      city,
      venueAddress,
      organizingSociety,
      contactPerson,
      contactNumber,
      emailAddress,
      websiteAddress,
      eventMonthYear,
      startDate,
      endDate,
      submissionDeadline,
      registrationDeadline,
      abstracts,
      eventDescription,
    } = req.body;

    const requiredFields = [
      eventName,
      eventTitle,
      eventType,
      eventTopic,
      eventSubTopic,
      country,
      state,
      city,
      venueAddress,
      organizingSociety,
      contactPerson,
      contactNumber,
      emailAddress,
      websiteAddress,
      eventMonthYear,
      startDate,
      endDate,
      submissionDeadline,
      registrationDeadline,
      abstracts,
      eventDescription,
    ];

    if (requiredFields.some((field) => !field)) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const allEventField = {
      eventName,
      eventTitle,
      eventType,
      eventTopic,
      eventSubTopic,
      country,
      state,
      city,
      venueAddress,
      organizingSociety,
      contactPerson,
      contactNumber,
      emailAddress,
      websiteAddress,
      eventMonthYear,
      startDate,
      endDate,
      submissionDeadline,
      registrationDeadline,
      abstracts,
      eventDescription,
    };

    const newEvent = new AddEvent(allEventField);

    await newEvent.save();

    const transporter = setupEmailTransporter();

    const userMailOptions = {
      from: process.env.EMAIL,
      to: emailAddress,
      subject: "Event Submission Confirmation",
      text: `Dear ${contactPerson},

      Your event "${eventTitle}" has been successfully submitted and is under review. Here are the details of your event:
      Event Name: ${eventName}
      Event Type: ${eventType}
      Event Topic: ${eventTopic}
      Event Sub-Topic: ${eventSubTopic}
      Country: ${country}
      State: ${state}
      City: ${city}
      Venue Address: ${venueAddress}
      Organizing Society: ${organizingSociety}
      Contact Number: ${contactNumber}
      Website Address: ${websiteAddress}
      Event Month/Year: ${eventMonthYear}
      Start Date: ${startDate}
      End Date: ${endDate}
      Submission Deadline: ${submissionDeadline}
      Registration Deadline: ${registrationDeadline}
      Abstracts: ${abstracts}
      Event Description: ${eventDescription}

      Thank you for your submission.

      Best regards,
      Event Management Team`,
    };

    transporter.sendMail(userMailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    const adminMailOptions = {
      from: process.env.EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "New Event created",
      text: `A new event has been created with the following details:
      Event Name: ${eventName}
      Event Type: ${eventType}
      Event Topic: ${eventTopic}
      Event Sub-Topic: ${eventSubTopic}
      Country: ${country}
      State: ${state}
      City: ${city}
      Venue Address: ${venueAddress}
      Organizing Society: ${organizingSociety}
      Contact Person: ${contactPerson}
      Contact Number: ${contactNumber}
      Email Address: ${emailAddress}
      Website Address: ${websiteAddress}  
      Event Month/Year: ${eventMonthYear}
      Start Date: ${startDate}
      End Date: ${endDate}
      Submission Deadline: ${submissionDeadline}
      Registration Deadline: ${registrationDeadline}
      Abstracts: ${abstracts}
      Event Description: ${eventDescription}`,
    };

    transporter.sendMail(adminMailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(201).json({
      message: "Event create successfully",
      data: newEvent,
    });
  } catch (error) {
    console.log("Error creating event", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllEvent = async (req, res) => {
  try {
    const events = await AddEvent.find();

    if (events.length === 0) {
      return res.status(404).json({ message: "No event found" });
    }

    res
      .status(200)
      .json({ message: "Event retrieved successfully", data: events });
  } catch (error) {
    console.log("Error retrieving event", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getEventById = async (req, res) => {
  try {
    const event = await AddEvent.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res
      .status(200)
      .json({ message: "Event retrieved successfully", data: event });
  } catch (error) {
    console.log("Error retrieving event", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const searchEvent = async (req, res) => {
  try {
    const { query, location, dateFilter } = req.query;

    const searchCriteria = {};

    if (query) {
      searchCriteria.$or = [
        { eventName: { $regex: query, $options: "i" } },
        { eventTitle: { $regex: query, $options: "i" } },
        { eventType: { $regex: query, $options: "i" } },
        { eventTopic: { $regex: query, $options: "i" } },
      ];
    }

    if (location) {
      searchCriteria.$or = [
        { country: { $regex: location, $options: "i" } },
        { state: { $regex: location, $options: "i" } },
        { city: { $regex: location, $options: "i" } },
      ];
    }

    const today = moment().startOf("day");
    switch (dateFilter) {
      case "Tomorrow":
        searchCriteria.startDate = {
          $gte: today.clone().add(1, "days").toDate(),
          $lt: today.clone().add(2, "days").toDate(),
        };
        break;
      case "This Week":
        searchCriteria.startDate = {
          $gte: today.toDate(),
          $lt: today.clone().add(7, "days").toDate(),
        };
        break;
      case "This Weekend":
        const weekendStart = moment().day(6).startOf("day");
        const weekendEnd = moment().day(7).endOf("day");
        searchCriteria.startDate = {
          $gte: weekendStart.toDate(),
          $lte: weekendEnd.toDate(),
        };
        break;
      case "Next Week":
        const nextWeekStart = moment().add(1, "weeks").startOf("isoWeek");
        const nextWeekEnd = moment().add(1, "weeks").endOf("isoWeek");
        searchCriteria.startDate = {
          $gte: nextWeekStart.toDate(),
          $lt: nextWeekEnd.toDate(),
        };
        break;
      case "Next Month":
        searchCriteria.startDate = {
          $gte: today.clone().add(1, "month").startOf("month").toDate(),
          $lt: today.clone().add(1, "month").endOf("month").toDate(),
        };
        break;
      default:
        break;
    }

    console.log("Search", searchCriteria);

    const events = await AddEvent.find(searchCriteria);

    if (events.length === 0) {
      return res
        .status(404)
        .json({ message: "No events found matching your search" });
    }

    return res
      .status(200)
      .json({ message: "Search results retrieved successfully", data: events });
  } catch (error) {
    console.log("Error searching events", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
