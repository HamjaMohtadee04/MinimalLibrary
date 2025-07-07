# 📚 Minimal Library Management System

A minimal full-stack Library Management System built with **React + Vite**, **Redux Toolkit Query**, **Express.js**, **MongoDB**, and deployed to **Vercel**.

---

## 🌐 Live Demo

- 🔗 **Frontend**: [https://minimal-library-frontend.vercel.app](https://minimal-library-frontend.vercel.app)  
- 🔗 **Backend**: [https://minimal-library-backend.vercel.app](https://minimal-library-backend.vercel.app)  

---

## 🛠️ Tech Stack

**Frontend:**

- React + Vite
- TypeScript
- Redux Toolkit Query
- Tailwind CSS
- React Router
- Toast Notifications

**Backend:**

- Express.js
- Node.js
- MongoDB with Mongoose
- CORS Handling
- Serverless Deployment with Vercel

---


---

## 📖 Available API Routes

**Base URL (Backend):** `https://minimal-library-backend.vercel.app/api`

### 📚 Book Routes

| Method | Endpoint         | Description                 |
|--------|-----------------|-----------------------------|
| GET    | `/books`        | Get all books               |
| GET    | `/books/:id`    | Get details of a book       |
| POST   | `/books`        | Add new book                |
| PATCH  | `/books/:id`    | Update book details         |
| DELETE | `/books/:id`    | Delete a book               |

---

### 📦 Borrow Routes

| Method | Endpoint              | Description               |
|--------|----------------------|---------------------------|
| POST   | `/borrow/:bookId`     | Borrow book (reduce copies) |
| GET    | `/borrow/summary`     | Summary of borrowed books |

---

## ⚙️ Local Installation Guide

### ✅ Prerequisites

- Node.js & npm installed
- MongoDB Atlas connection string (replace in `.env`)

---

### 🔥 Backend Setup

```
cd backend
npm install
# Add your .env file:
# MONGO_URI=your_mongo_connection
# PORT=5000
npm run dev
```
### Frontend Setup
```
cd frontend
npm install
# Create a .env file:
# VITE_API_BASE_URL=https://minimal-library-backend.vercel.app/api
npm run dev
```

###  Deployment
Both Frontend and Backend deployed to Vercel

Backend is serverless, no need to manage servers

CORS configured for secure frontend-backend communication

### Features
✅ Book CRUD Operations
✅ Borrow Book with Quantity & Due Date
✅ Borrow Summary Report
✅ Responsive UI with Tailwind CSS
✅ Toast Notifications for Actions
✅ MongoDB for persistent storage
✅ Deployed and Production-ready

### Author
Hamja Mohtadee Ebne Mamun