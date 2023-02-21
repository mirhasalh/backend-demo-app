const asyncHandler = require("express-async-handler");

// @desc Get notes
// @route GET /api/notes
// @access Private
const getNotes = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get notes" });
});

// @desc Set note
// @route POST /api/notes
// @access Private
const setNote = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Text are required");
  }

  res.status(200).json({ message: "Set note" });
});

// @desc Update notes
// @route PUT /api/notes/:id
// @access Private
const updateNote = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update note ${req.params.id}` });
});

// @desc Delete notes
// @route DELETE /api/notes/:id
// @access Private
const deleteNotes = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete note ${req.params.id}` });
});

module.exports = {
  getNotes,
  setNote,
  updateNote,
  deleteNotes,
};
