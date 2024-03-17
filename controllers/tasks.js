const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const { userId } = req.body;
    const tasks = await Task.find({ userId: userId });
    res.status(200).json({ tasks: [...tasks] });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const getTask = async (req, res) => {
  try {
    const { taskId } = req.query;
    const task = await Task.findById(taskId);
    res.status(200).json({ task: task });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const addTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateTask = (req, res) => {
  res.status(200).send("Update Tasks");
};

const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.query;
    await Task.findByIdAndDelete(taskId);
    res.status(200).json({ status: true });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = { getAllTasks, getTask, addTask, updateTask, deleteTask };
