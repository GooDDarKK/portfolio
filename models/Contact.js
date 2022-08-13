const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema(
  {
    type: {
      type: String,
    },
    img: {
      type: String,
    },
    link: {
      type: String,
    },
    profile_img: {
      type: String,
    },
  },
  { timestamps: false }
);

module.exports = mongoose.model("Contacts", ContactSchema);
