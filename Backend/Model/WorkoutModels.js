const mongoose = require("mongoose");

const schema = mongoose.Schema;

const workoutSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  load: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("workout", workoutSchema);
