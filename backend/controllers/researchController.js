import Research from "../models/research.js";
import { setupEmailTransporter } from "../utils/email.js";

export const createResearch = async (req, res) => {
  const { fullName, email, country, mobile, researchField } = req.body;
  try {
    const research = new Research({
      fullName,
      email,
      country,
      mobile,
      researchField,
    });
    await research.save();

    await setupEmailTransporter().sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Research Submitted",
      text: `Dear ${fullName},\n\nYour research submission has been received successfully.\n Thank you for subscribing to our newsletter.\n\nBest regards,\nConference Team`,
    });

    await setupEmailTransporter().sendMail({
      from: process.env.EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "New Research Submitted",
      text: `A new research submission has been received.\n\nName: ${fullName}\nEmail: ${email}\nCountry: ${country}\nMobile: ${mobile}\nResearch Field: ${researchField}`,
    });

    res.status(201).json({ message: "Research created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating research" });
  }
};
