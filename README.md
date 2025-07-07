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

**Base URL (Backend):** `https://minimal-library-backend.vercel.app`

### 📚 Book Routes

| Method | Endpoint         | Description                 |
|--------|-----------------|-----------------------------|
| GET    | `api/books`        | Get all books               |
| GET    | `api/books/:id`    | Get details of a book       |
| POST   | `api/books`        | Add new book                |
| PATCH  | `api/books/:id`    | Update book details         |
| DELETE | `api/books/:id`    | Delete a book               |

---

### 📦 Borrow Routes

| Method | Endpoint              | Description               |
|--------|----------------------|---------------------------|
| POST   | `api/borrow/:bookId`     | Borrow book (reduce copies) |
| GET    | `api/borrow/summary`     | Summary of borrowed books |

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
- Both Frontend and Backend deployed to Vercel
- Backend is serverless, no need to manage servers
- CORS configured for secure frontend-backend communication


## 🏆 Features
- ✅ Book Management (CRUD)
- ✅ Borrow Functionality with Due Dates
- ✅ Borrow Summary Report
- ✅ Fully Responsive UI
- ✅ Toast Notifications for Actions
- ✅ Deployed and Production-ready

## ⚠️ Important Notes
Vercel serverless functions sometimes require a short warm-up period. On first access, you may encounter errors or the backend may not respond initially.

If this happens:
- ✅ Open the backend link directly: [https://minimal-library-backend.vercel.app/](https://minimal-library-backend.vercel.app/)
- ✅ Open the frontend link: [https://minimal-library-frontend.vercel.app/](https://minimal-library-frontend.vercel.app/)
- ✅ Try again in Incognito Mode for a clean session

After a few refreshes or backend wake-up, the data will load properly.

### Author
Hamja Mohtadee Ebne Mamun