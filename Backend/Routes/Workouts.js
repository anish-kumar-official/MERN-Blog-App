//all the workouts routes are going to be here
//here we don't have access to the express app so we need to require that

const express = require("express");
const workoutSchema = require("../Model/WorkoutModels");

const router = express.Router();

//GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all the workouts" });
});

//GET a single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET single workout" });
});

//POST a single workout
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await workoutSchema.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//DELETE a single workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE single workout" });
});

//UPDATE a single workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE single workout" });
});

module.exports = router;
