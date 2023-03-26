import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";

const app = express();

app.use(express.json());

app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  .connect(
    "mongodb+srv://admin:Moriarty132@blogapp.e1kyu5r.mongodb.net/BlogApp?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected to database and listening to localhost 5000")
  )
  .catch((err) => console.log(err));
