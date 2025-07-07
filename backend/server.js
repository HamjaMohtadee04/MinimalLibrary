// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // require('dotenv').config();

// // const bookRoutes = require('./routes/book.routes');
// // const borrowRoutes = require('./routes/borrow.routes');

// // const app = express();
// // app.use(cors({
// //     origin:["https://minimal-library-frontend-idqa0v2cb-hamjamohtadees-projects.vercel.app/"]
// // }));
// // app.use(express.json());

// // app.use('/api/books', bookRoutes);
// // app.use('/api/borrow', borrowRoutes);

// // app.get("/", (req, res) => {
// //   res.send("Library Management Backend is Running");
// // });

// // mongoose.connect(process.env.MONGO_URI)
// //   .then(() => {
// //     console.log('✅ MongoDB Connected');
// //     app.listen(process.env.PORT, () => console.log(`🚀 Server running on port ${process.env.PORT}`));
// //   })
// //   .catch(err => console.error(err));
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const serverless = require('serverless-http');
// require('dotenv').config();

// const bookRoutes = require('./routes/book.routes');
// const borrowRoutes = require('./routes/borrow.routes');

// const app = express();

// app.use(cors({
//   origin: [
//   "https://minimal-library-frontend.vercel.app"
//   ]
// }));

// app.use(express.json());

// app.use('/api/books', bookRoutes);
// app.use('/api/borrow', borrowRoutes);


// let isConnected = false;

// async function connectDB() {
//   if (isConnected) return;
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("✅ MongoDB Connected");
//     isConnected = true;
//   } catch (err) {
//     console.error("MongoDB connection failed:", err);
//   }
// }


// app.use(async (req, res, next) => {
//   await connectDB();
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("Library Management Backend is Running");
// });

// module.exports = app;
// module.exports.handler = serverless(app);

const app = require('./api/index');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));