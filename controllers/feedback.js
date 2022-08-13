const Feedbacks = require("../models/Feedbacks");

// GET
const getAllFeedbacks = async (req, res) => {
  const feedbacks = await Feedbacks.find({}).sort({ createdAt: -1 });

  res.status(200).json(feedbacks);
};

// POST
const createFeedback = async (req, res) => {
  const { name, comment } = req.body;

  const createFeedback = await Feedbacks.create({ name, comment });

  res.status(200).json(createFeedback);
};

// PUT || PATCH
const updateFeedback = async (req, res) => {
  const { id } = req.params;
  const { name, comment } = req.body;

  const updateFeedback = await Feedbacks.findByIdAndUpdate(id, {
    name,
    comment,
  });

  res.status(200).json(updateFeedback);
};

// DELETE
const deleteFeedback = async (req, res) => {
  const { id } = req.params;

  const deleteFeedback = await Feedbacks.findByIdAndDelete(id);

  res.status(200).json(deleteFeedback);
};

module.exports = {
  createFeedback,
  getAllFeedbacks,
  deleteFeedback,
  updateFeedback,
};
