const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Text are required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", noteSchema);
