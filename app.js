import express from "express";
import mongoose from "mongoose";
const app = express();

app.use("/api", (req, res, next) => {
  res.send("Hello World");
});

mongoose
  .connect(
    "mongodb+srv://admin:Moriarty132@blogapp.e1kyu5r.mongodb.net/BlogApp?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected to database and listening to localhost 5000")
  )
  .catch((err) => console.log(err));
