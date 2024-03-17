require("dotenv").config();
const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

app.use(express.json());
app.use("/api/tasks", tasks);

const startingApp = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(5500, () => {
      console.log("Server is listening in 5500");
    });
    console.log("Application Started");
  } catch (err) {
    console.log(err);
  }
};

startingApp();
