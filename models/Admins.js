const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    default: "None",
  },
  id: {
    type: Number,
    required: false,
  },
  type: {
    type: String,
    default: "Assistant admin",
  },
});

module.exports = mongoose.model("Admin_ids", AdminsSchema);
