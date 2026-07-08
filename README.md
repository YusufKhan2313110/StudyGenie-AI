# 🎓 StudyGenie AI

StudyGenie AI is a full-stack AI-powered learning assistant developed as part of the IBM CSRBOX GenAI Vibe Coding Internship Project.

The application helps students learn more efficiently using Google's Gemini Large Language Model.

---

## Features

- 💬 AI Chat Assistant
- 📝 Notes Summarizer
- ❓ Quiz Generator
- 🧠 Flashcard Generator
- 💡 Topic Explainer
- 📱 Responsive User Interface
- 🔒 Secure Backend API
- 🐳 Docker Containerization
- ☁️ AWS Deployment Ready

---

## Tech Stack

### Frontend

- React
- Vite
- CSS
- Axios

### Backend

- Node.js
- Express.js

### AI

- Google Gemini 2.5 Flash API

### Deployment

- Docker
- AWS App Runner

---

## Folder Structure

StudyGenie-AI/

├── client/

├── server/

├── docker-compose.yml

└── README.md

---

## Installation

Clone the repository

```bash
git clone https://github.com/YusufKhan2313110/StudyGenie-AI.git
```

Install frontend

```bash
cd client
npm install
```

Install backend

```bash
cd ../server
npm install
```

Start backend

```bash
npm run dev
```

Start frontend

```bash
cd ../client
npm run dev
```

---

## Docker

```bash
docker compose up --build
```

---

## Environment Variables

Server

```env
GEMINI_API_KEY=YOUR_API_KEY
PORT=5000
```

Client

```env
VITE_API_URL=http://localhost:5000/api
```

---

## Author

Yusuf Khan

AKGEC
B.Tech Information Technology

IBM CSRBOX GenAI Internship Project