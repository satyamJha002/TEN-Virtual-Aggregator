import SciEvent from "../models/sciEvents.js";
import moment from "moment";

export const createEvent = async (req, res) => {
  try {
    const { date, name, venue } = req.body;

    // Extract month from date (DD-MM-YYYY)
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthIndex = parseInt(date.split("-")[1]) - 1;
    const month = months[monthIndex];

    const newEvent = new SciEvent({
      date,
      name,
      venue,
      month,
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await SciEvent.find().sort({ date: 1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, name, venue } = req.body;

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthIndex = parseInt(date.split("-")[1]) - 1;
    const month = months[monthIndex];

    const updatedEvent = await SciEvent.findByIdAndUpdate(
      id,
      { date, name, venue, month },
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await SciEvent.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const searchEvent = async (req, res) => {
  try {
    const { query, location, dateFilter } = req.query;

    const searchCriteria = {};

    if (query) {
      searchCriteria.$or = [{ name: { $regex: query, $options: "i" } }];
    }

    if (location) {
      searchCriteria.$or = [{ venue: { $regex: location, $options: "i" } }];
    }

    if (dateFilter) {
      const today = moment().startOf("day");
      switch (dateFilter) {
        case "Tomorrow":
          searchCriteria.date = {
            $gte: today.clone().add(1, "days").format("YYYY-MM-DD"),
            $lt: today.clone().add(2, "days").format("YYYY-MM-DD"),
          };
          break;
        case "This Week":
          searchCriteria.date = {
            $gte: today.format("YYYY-MM-DD"),
            $lt: today.clone().add(7, "days").format("YYYY-MM-DD"),
          };
          break;
        case "This Weekend":
          const weekendStart = moment().day(6).startOf("day");
          const weekendEnd = moment().day(7).endOf("day");
          searchCriteria.date = {
            $gte: weekendStart.format("YYYY-MM-DD"),
            $lte: weekendEnd.format("YYYY-MM-DD"),
          };
          break;
        case "Next Week":
          const nextWeekStart = today
            .clone()
            .add(1, "weeks")
            .startOf("isoWeek");
          const nextWeekEnd = today.clone().add(1, "weeks").endOf("isoWeek");
          searchCriteria.date = {
            $gte: nextWeekStart.format("YYYY-MM-DD"),
            $lt: nextWeekEnd.format("YYYY-MM-DD"),
          };
          break;
        case "Next Month":
          searchCriteria.date = {
            $gte: today
              .clone()
              .add(1, "month")
              .startOf("month")
              .format("YYYY-MM-DD"),
            $lt: today
              .clone()
              .add(1, "month")
              .endOf("month")
              .format("YYYY-MM-DD"),
          };
          break;
        default:
          break;
      }
    }

    console.log("Search", searchCriteria);

    const events = await SciEvent.find(searchCriteria);

    if (!events.length) {
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
