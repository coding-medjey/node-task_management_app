const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router.get("/", getAllTasks);

router.get("/get", getTask);

router.post("/add", addTask);

router.put("/update", updateTask);

router.delete("/delete", deleteTask);

module.exports = router;
