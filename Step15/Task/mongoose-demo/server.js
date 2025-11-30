// server.js
const express = require('express');
require('dotenv').config();
const { connectDB } = require('./db');
const userRoutes = require('./routes/users');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

async function start() {
  await connectDB();

  // simple root
  app.get('/', (req,res) => res.send('Welcome to Mongoose demo'));

  // API routes
  app.use('/api/users', userRoutes);

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

start();
