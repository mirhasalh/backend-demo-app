const express = require("express");
const router = express.Router();
const {
  getNotes,
  setNote,
  updateNote,
  deleteNotes,
} = require("../controllers/noteControllers");

router.route("/").get(getNotes).post(setNote);

router.route("/:id").put(updateNote).delete(deleteNotes);

module.exports = router;
