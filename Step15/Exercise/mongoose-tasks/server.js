// server.js
const mongoose = require('mongoose');
const Task = require('./models/Task');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mongoose_tasks_demo';

async function main() {
  // 1) Connect — without deprecated options
  await mongoose.connect(MONGO_URI);
  console.log('Connected to MongoDB');

  // 2) Create a new task
  const newTask = new Task({
    description: 'Finish the Mongoose schema tutorial',
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24) // tomorrow
  });

  try {
    const saved = await newTask.save();
    console.log('Saved task:', saved);

    // 3) Query tasks (find all)
    const tasks = await Task.find();
    console.log('All tasks:', tasks);

    // 4) Update a task (mark as completed)
    const updated = await Task.findByIdAndUpdate(saved._id, { completed: true }, { new: true });
    console.log('Updated task:', updated);

    // 5) (Optional) Delete a task
    // await Task.findByIdAndDelete(saved._id);
    // console.log('Task deleted');

  } catch (err) {
    console.error('Error:', err.message);
    if (err.name === 'ValidationError') {
      for (const key in err.errors) {
        console.error(err.errors[key].message);
      }
    }
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

main().catch(err => {
  console.error('Main error:', err);
});
