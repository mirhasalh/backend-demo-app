const asyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");

// @desc Get notes
// @route GET /api/notes
// @access Private
const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find();

  res.status(200).json(notes);
});

// @desc Set note
// @route POST /api/notes
// @access Private
const setNote = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Text are required");
  }

  const note = await Note.create({
    text: req.body.text,
  });

  res.status(200).json(note);
});

// @desc Update notes
// @route PUT /api/notes/:id
// @access Private
const updateNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) {
    res.status(400);
    throw new Error("Not found");
  }

  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedNote);
});

// @desc Delete notes
// @route DELETE /api/notes/:id
// @access Private
const deleteNotes = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) {
    res.status(400);
    throw new Error("Not found");
  }

  await note.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getNotes,
  setNote,
  updateNote,
  deleteNotes,
};
