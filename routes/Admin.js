const express = require("express");
const router = express.Router();

const {
  getAllAdmins,
  getAdmin,
  postAdmin,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/admins");

// GET ALL
router.get("/", getAllAdmins);

// GET A SINGLE
router.get("/:id", getAdmin);

// POST
router.post("/", postAdmin);

// UPDATE
router.patch("/:id", updateAdmin);

// DELETE
router.delete("/:id", deleteAdmin);

module.exports = router;
