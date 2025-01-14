import Brochure from "../models/brochure.js";
import { setupEmailTransporter } from "../utils/email.js";

export const createBrochure = async (req, res) => {
  const { fullName, phoneNumber, email } = req.body;

  try {
    const newBrochure = new Brochure({ fullName, phoneNumber, email });

    await newBrochure.save();

    const transporter = setupEmailTransporter();

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Brochure Download Confirmation",
      text: `Thank you for downloading the brochure, ${fullName}!`,
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "New Brochure Download",
      text: `A new brochure download has been received.\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phoneNumber}`,
    });

    res.status(201).json({ message: "Brochure download successful" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Unexpected server error. Please try again." });
  }
};
