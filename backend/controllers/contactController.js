import Contact from "../models/contact.js";
import { setupEmailTransporter } from "../utils/email.js";

export const contactDetails = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, queriesTitle, message } = req.body;

    if (!fullName || !email || !phoneNumber || !queriesTitle || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      existingContact.message = existingContact.message + "\n" + message;
      await existingContact.save();

      return res.status(200).json({
        success: true,
        message: "Your query has been updated and is being processed again.",
        contact: existingContact,
      });
    }

    const newContact = new Contact({
      fullName,
      email,
      phoneNumber,
      queriesTitle,
      message,
    });

    await newContact.save();

    const transporter = setupEmailTransporter();

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Problem Query Contact Details",
      text: `A new contact query has been submitted with the following details:

        Full Name: ${fullName}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Queries Title: ${queriesTitle}
        Message : ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(200).json({
      success: true,
      message: "Your query has been successfully submitted.",
      contact: newContact,
    });
  } catch (error) {
    console.error("Error in contactDetails controller:", error.message);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};
