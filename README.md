# Alumni Portal

A full-stack web application connecting alumni, students, and faculty with features for directories, job boards, and authentication.

## 📁 Project Structure

```
Alumni-portal-SVU/
├── backend/       # Node.js & Express server with MongoDB
└── frontend/      # React frontend built with Vite
```

## 🚀 Getting Started

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/` following `.env.example`:
```env
MONGO_URI="your_mongodb_connection_string"
PORT=5001
```

Start the backend:
```bash
npm run dev # or node server.js
```

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open your browser at `http://localhost:5173`.
