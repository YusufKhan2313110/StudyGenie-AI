# StudyGenie AI - System Architecture

## Overview

StudyGenie AI is a full-stack AI-powered study assistant designed to help students learn more efficiently using Google's Gemini API. The application follows a client-server architecture.

---

## High-Level Architecture

```
                User
                  │
                  ▼
        React Frontend (Vite)
                  │
          HTTP Requests (REST)
                  │
                  ▼
        Express.js Backend API
                  │
                  ▼
      Prompt Engineering Layer
                  │
                  ▼
      Google Gemini 2.5 Flash API
                  │
                  ▼
         AI Generated Response
                  │
                  ▼
        Express Response
                  │
                  ▼
          React User Interface
```

---

## Frontend

Technology Stack

- React
- Vite
- JavaScript
- CSS

Responsibilities

- User Interface
- Collect prompts
- Display responses
- Tool selection
- Loading animations

---

## Backend

Technology Stack

- Node.js
- Express.js

Responsibilities

- Receive API requests
- Validate input
- Generate prompts
- Call Gemini API
- Return AI responses

---

## AI Layer

Google Gemini 2.5 Flash powers:

- Chat
- Summarization
- Quiz generation
- Flashcard generation
- Explanation generation

---

## API Flow

User Input

↓

React Frontend

↓

Express Backend

↓

Prompt Builder

↓

Gemini API

↓

Generated Response

↓

Frontend Display

---

## Docker Architecture

Frontend Container

↓

Docker Network

↓

Backend Container

↓

Gemini API

---

## Security

- Environment variables
- API key hidden on server
- CORS enabled
- JSON validation
- REST API architecture

---

## Future Improvements

- Authentication
- Database integration
- PDF upload
- Voice interaction
- Image understanding
- User history
- Dark mode
- Cloud deployment