const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const bookRoutes = require('../routes/book.routes');
const borrowRoutes = require('../routes/borrow.routes');

const app = express();

app.use(cors({
  origin: ["https://minimal-library-frontend.vercel.app"]
}));
app.use(express.json());

app.use('/api/books', bookRoutes);
app.use('/api/borrow', borrowRoutes);

let isConnected = false;
async function connectDB() {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
    isConnected = true;
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
}

app.use(async (req, res, next) => {
  await connectDB();
  next();
});

app.get("/", (req, res) => {
  res.send("Library Management Backend is Running");
});

module.exports = app;
