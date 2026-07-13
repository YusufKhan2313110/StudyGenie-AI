# 🎓 StudyGenie AI

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" />
  <img src="https://img.shields.io/badge/Node.js-Express-green?logo=node.js" />
  <img src="https://img.shields.io/badge/Google-Gemini-orange?logo=google" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel" />
  <img src="https://img.shields.io/badge/Render-Backend-46E3B7?logo=render" />
  <img src="https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker" />
</p>

A modern **AI-powered study assistant** that helps students learn smarter using **Google Gemini AI**. Generate summaries, quizzes, flashcards, explanations, and chat with an intelligent AI tutor through a clean and responsive web interface.

Developed as part of the **IBM CSRBOX GenAI Vibe Coding Internship Project**.

---

# 🚀 Live Demo

### 🌐 Frontend

**https://study-genie-ai-orpin.vercel.app/**

### ⚙️ Backend API

**https://studygenie-backend-q6tk.onrender.com**

---

# ✨ Features

- 💬 AI Chat Assistant
- 📝 Notes Summarizer
- ❓ Quiz Generator
- 🧠 Flashcard Generator
- 💡 AI Concept Explainer
- ⚡ Fast Gemini-powered responses
- 📱 Fully Responsive UI
- 🎨 Modern Dashboard Interface
- 🔒 Secure Backend API (Environment Variables)
- 🐳 Docker Containerization
- ☁️ Cloud Deployment (Vercel + Render)
- 🚀 AWS Ready

---

# 📸 Application Preview

| Landing Page | Workspace |
|--------------|-----------|
| ![](screenshots/landing-page.png) | ![](screenshots/workspace.png) |

| AI Chat | Notes Summarizer |
|---------|------------------|
| ![](screenshots/chat.png) | ![](screenshots/summary.png) |

| Quiz Generator |
|----------------|
| ![](screenshots/quiz.png) |

---

# 🛠️ Tech Stack

## Frontend

- React 19
- Vite
- Tailwind CSS
- React Router
- Axios
- React Markdown
- React Hot Toast
- Lucide React

---

## Backend

- Node.js
- Express.js
- CORS
- dotenv

---

## AI

- Google Gemini 2.5 Flash API

---

## Deployment

- Vercel (Frontend)
- Render (Backend)

---

## Containerization

- Docker
- Docker Compose

---

# 📁 Project Structure

```
StudyGenie-AI/
│
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── Dockerfile
│
├── server/
│   ├── routes/
│   ├── services/
│   ├── prompts/
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/YusufKhan2313110/StudyGenie-AI.git

cd StudyGenie-AI
```

---

## 2. Install Backend

```bash
cd server

npm install
```

---

## 3. Install Frontend

```bash
cd ../client

npm install
```

---

# 🔑 Environment Variables

## Backend (`server/.env`)

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
PORT=5000
```

---

## Frontend (`client/.env`)

### Local Development

```env
VITE_API_URL=http://localhost:5000/api
```

### Production

```env
VITE_API_URL=https://studygenie-backend-q6tk.onrender.com/api
```

---

# ▶️ Running Locally

## Backend

```bash
cd server

npm start
```

---

## Frontend

```bash
cd client

npm run dev
```

Frontend:

```
http://localhost:5173
```

Backend:

```
http://localhost:5000
```

---

# 🐳 Docker

Build and run both frontend and backend using Docker Compose:

```bash
docker compose up --build
```

Frontend:

```
http://localhost:3000
```

Backend:

```
http://localhost:5000
```

---

# 🏗️ Architecture

```
                 User
                   │
                   ▼
        React + Vite Frontend
                   │
              Axios Requests
                   │
                   ▼
          Express.js Backend API
                   │
          Google Gemini API
                   │
                   ▼
          AI Generated Response
                   │
                   ▼
              React Interface
```

---

# 🔒 Security

- API keys stored using environment variables
- Gemini API key never exposed to the frontend
- Backend acts as a secure middleware
- CORS enabled
- HTTPS deployment
- Secrets excluded from Git using `.gitignore`

---

# 📦 Deployment

### Frontend

- Vercel

### Backend

- Render

The project is fully containerized and can be migrated to **AWS App Runner** with minimal configuration changes.

---

# 📚 Future Improvements

- User Authentication
- Chat History
- PDF Upload & Analysis
- Voice Input
- Image Understanding
- Multi-language Support
- Export Notes as PDF
- Study Planner
- User Profiles
- AWS Deployment

---

# 👨‍💻 Author

**Yusuf Khan**

B.Tech Information Technology

Ajay Kumar Garg Engineering College (AKGEC)

IBM CSRBOX GenAI Vibe Coding Internship

---

# ⭐ If you like this project

Give this repository a ⭐ on GitHub!