const mongoose = require("mongoose");

const TagsSchema = new mongoose.Schema({
  TagName: {
    type: String,
    trim: true,
  },
  Link: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Links",
  },
});

module.exports = mongoose.model("Tags", TagsSchema);
