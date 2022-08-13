const express = require("express");
const router = express.Router();

const {
  createFeedback,
  getAllFeedbacks,
  deleteFeedback,
  updateFeedback,
} = require("../controllers/feedback");

// GET ALL FEEDBACKS
router.get("/", getAllFeedbacks);

// POST FEEDBACK
router.post("/", createFeedback);

// PUT | PATCH
router.put("/:id", updateFeedback);

// DELETE FEEDBACK
router.delete("/:id", deleteFeedback);

module.exports = router;
