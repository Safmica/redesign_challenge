# GDGOC Unsri - Event Redesign Challenge

This repository contains the fullstack implementation of our submission for the **Event Redesign Challenge** organized by GDGOC Universitas Sriwijaya.

## 🗂 Structure

```
.
├── backend/
└── frontend/
```

## ⚙ Tech Stack

### Backend (`/backend`)
- **Go** with [Fiber](https://gofiber.io/)
- **GORM** for ORM
- RESTful API
- File upload handling
- Modular structure

### Frontend (`/frontend`)
- **React** with [Vite](https://vitejs.dev/)
- Tailwind CSS for styling
- API integration with backend
- Fully responsive UI

## 🚀 Getting Started

To run this project locally:

### Backend

```bash
cd backend
go mod tidy
go run main.go
```

Make sure to create a `.env` file in `/be` with your database and base URL configs.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## 📄 License

This project is for educational and competition purposes only.