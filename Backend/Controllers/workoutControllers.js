const { default: mongoose } = require("mongoose");
const WorkoutModels = require("../Model/WorkoutModels");

//get all workouts
const getAllWorkouts = async (req, res) => {
  const workout = await WorkoutModels.find({}).sort({ timeCreated: -1 });
  res.status(200).json(workout);
};

//get a single workout
const singleWorkout = async (req, res) => {
  const { id } = req.params;
  const workout = await WorkoutModels.findById(id);
  res.status(200).json(workout);
};

//post a new workout
const postWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await WorkoutModels.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

//delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such id is there" });
  }

  const workout = await WorkoutModels.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ error: "No such workout is available" });
  }

  res.status(200).json(workout);
};

//update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such id is there" });
  }

  const workout = await WorkoutModels.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    res.status(404).json({ error: "no such work out is available" });
  }
  res.status(200).json(workout);
};

module.exports = {
  postWorkout,
  getAllWorkouts,
  singleWorkout,
  deleteWorkout,
  updateWorkout,
};
