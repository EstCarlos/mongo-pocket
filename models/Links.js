const mongoose = require("mongoose");

const LinksSchema = new mongoose.Schema({
  LinkName: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  TagName: {
    type: Array,
    require: true,
  },
});

module.exports = mongoose.model("Links", LinksSchema);
