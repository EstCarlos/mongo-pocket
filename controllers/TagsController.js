const Tags = require("../models/Tags");

const getAllData = async (req, res) => {
  try {
    const cr = await Tags.find({});
    res.status(200).json({ cr });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getOneItem = async (req, res) => {
  try {
    const { itemID: Tid } = req.params;
    const cr = await Tags.findOne({ _id: Tid });

    if (!cr) {
      return res.status(400).json({ message: "Not exist" });
    }

    res.status(200).json({ cr });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createData = async (req, res) => {
  const find = Tags.find({}).count();

  try {
    const cr = await Tags.create(req.body);
    res.status(201).json({ cr });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteData = async (req, res) => {
  try {
    const { itemID: Tid } = req.params;
    const cr = await Tags.findOneAndDelete({ _id: Tid });

    if (!cr) {
      return res.status(400).json({ message: "Not exist" });
    }

    res.status(200).json({ cr });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getAllData,
  getOneItem,
  createData,
  deleteData,
};
