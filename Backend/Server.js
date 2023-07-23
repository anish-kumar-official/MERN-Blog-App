const { log } = require("console");
const express = require("express");
require("dotenv").config();

//express app
const app = express();

//setting up the route handler

app.get("/", (req, res) => {
  res.json({ mssg: "welcome to the app" });
});

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.url);
  next();
});

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port 4000");
});
