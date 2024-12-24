import Journal from "../models/journal.js";

export const postJournal = async (req, res) => {
  const { title } = req.body;

  try {
    if (!title) {
      return res.status(400).json({ message: "Fill all the requireds" });
    }

    const existingJournal = await Journal.findOne({ title });

    if (existingJournal) {
      return res.status({
        message: "Journal is already existed with the same Id",
      });
    }

    const newJournal = new Journal({ title });
    await newJournal.save();

    res.status(201).json({ message: "New Journal is added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getJournals = async (req, res) => {
  try {
    const journals = await Journal.find();

    res.status(200).json({ message: "Successfull", journals });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateJournals = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const updateJournal = await Journal.findByIdAndUpdate(id, { title });

    if (!updateJournal) {
      return res.status(404).json({ message: "Journal not found" });
    }

    res
      .status(200)
      .json({ message: "Update Successfully", journal: updateJournal });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server is error", error });
  }
};

export const deleteJournal = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteJournal = await Journal.findByIdAndDelete(id);

    if (!deleteJournal) {
      return res.status(404).json({ message: "Journal not found" });
    }

    res
      .status(200)
      .json({ message: "Delete successfull", journal: deleteJournal });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server is error", error });
  }
};
