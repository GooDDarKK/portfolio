const express = require("express");
const router = express.Router();
const { getContact } = require("../controllers/contacts");

router.get("/", getContact);

module.exports = router;
