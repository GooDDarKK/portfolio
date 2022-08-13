const Admin = require("../models/Admins");

// GET ALL
const getAllAdmins = async (req, res) => {
  const getAdmins = await Admin.find({}).sort({ createdAt: -1 });

  res.status(200).json(getAdmins);
};

// GET A SINGLE
const getAdmin = async (req, res) => {
  const { id } = req.params;

  const getAdmin = await Admin.find({ id });

  res.status(200).json(getAdmin);
};

// POST
const postAdmin = async (req, res) => {
  const { name, id, username, type } = req.body;

  try {
    const postAdmin = await Admin.create({ id, name, username, type });

    res.status(200).json(postAdmin);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE
const updateAdmin = async (req, res) => {
  const _id = req.params.id;
  const { name, username, type } = req.body;
  try {
    const updateAdmin = await Admin.findByIdAndUpdate(_id, {
      name,
      username,
      type,
    });

    res.status(200).json(updateAdmin);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
const deleteAdmin = async (req, res) => {
  const { id } = req.params;

  const deleteAdmin = await Admin.findByIdAndDelete(id);

  res.status(200).json(deleteAdmin);
};

module.exports = {
  getAllAdmins,
  getAdmin,
  postAdmin,
  updateAdmin,
  deleteAdmin,
};
