const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");

// GET ALL WORKOUTS
router.get("/", (req, res) => {
  res.json({ message: "GET all Workouts" });
});

// GET one WorkOut
router.get("/:id", (req, res) => {
  res.json({ message: "GET one workout" });
});

// POST a new Workout
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  res.json({ message: "NEW WORKout" });
});

// DELETE A Workout
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE A WORKOUT" });
});

// UPDATE A WORKOUT
router.patch("/id", (req, res) => {
  res.json({ message: "UPDATED WORKOUT" });
});

module.exports = router;
