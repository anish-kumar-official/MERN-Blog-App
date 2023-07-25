//all the workouts routes are going to be here
//here we don't have access to the express app so we need to require that

const express = require("express");
const workoutSchema = require("../Model/WorkoutModels");
const {
  postWorkout,
  getAllWorkouts,
  singleWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../Controllers/workoutControllers");

const router = express.Router();

//GET all workouts
router.get("/", getAllWorkouts);

//GET a single workout
router.get("/:id", singleWorkout);

//POST a single workout
router.post("/", postWorkout);

//DELETE a single workout
router.delete("/:id", deleteWorkout);

//UPDATE a single workout
router.patch("/:id", updateWorkout);

module.exports = router;
