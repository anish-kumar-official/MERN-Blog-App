const express = require("express");
const workoutRoutes = require("./Routes/Workouts");
const mongoose = require("mongoose");
require("dotenv").config();

//express app
const app = express();

//middleware

//this middleware searches for any body content and if it does it will attach it to the req part
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.url);
  next();
});

//setting up the route handler

app.use("/api/workouts", workoutRoutes);

//connect to the DB using mongoose
//connect returns a promise
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("listening on port 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
