// db.js
const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI); // **NO extra options needed**
    console.log('MongoDB connected:', mongoose.connection.name);
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // stop app if DB fails
  }
}

// optional graceful shutdown
function closeDB() {
  return mongoose.connection.close();
}

module.exports = { connectDB, closeDB };
