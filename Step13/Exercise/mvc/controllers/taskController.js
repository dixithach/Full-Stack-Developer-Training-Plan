// controllers/taskController.js

const getAllTasks = (req, res) => {
  const tasks = [
    { id: 1, title: "Finish homework", completed: false },
    { id: 2, title: "Buy groceries", completed: true }
  ];

  res.json(tasks);
};

module.exports = { getAllTasks };
