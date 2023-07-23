//all the workouts routes are going to be here
//here we don't have access to the express app so we need to require that

const express = require("express");

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
router.post("/", (req, res) => {
  res.json({ mssg: "POST single workout" });
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
