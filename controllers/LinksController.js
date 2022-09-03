const Links = require("../models/Links");

const getAllData = async (req, res) => {
  try {
    const cr = await Links.find({});
    res.status(200).json({ cr });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getOneItem = async (req, res) => {
  try {
    const { itemID: Lid } = req.params;
    const cr = await Links.findOne({ _id: Lid });

    if (!cr) {
      return res.status(400).json({ message: "Not exist" });
    }

    res.status(200).json({ cr });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createData = async (req, res) => {
  try {
    const cr = await Links.create(req.body);

    res.status(201).json({ cr });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteData = async (req, res) => {
  try {
    const { itemID: Lid } = req.params;
    const cr = await Links.findOneAndDelete({ _id: Lid });

    if (!cr) {
      return res.status(400).json({ message: "Not exist" });
    }

    res.status(200).json({ cr });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateData = async () => {};

module.exports = {
  getAllData,
  getOneItem,
  createData,
  deleteData,
};
