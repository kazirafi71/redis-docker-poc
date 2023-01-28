const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", postSchema);
