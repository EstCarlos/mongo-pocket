const mongoose = require("mongoose");

const LinksSchema = new mongoose.Schema({
  LinkName: {
    type: String,
    require: true,
    trim: true,
  },
});

module.exports = mongoose.model("Links", LinksSchema);
