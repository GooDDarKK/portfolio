const ContactSchema = require("../models/Contact");

// GET
const getContact = async (req, res) => {
  const contacts = await ContactSchema.find({});
  res.json(contacts);
};

module.exports = { getContact };
