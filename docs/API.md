# StudyGenie AI - API Documentation

## Overview

The backend exposes REST APIs that communicate with Google's Gemini API. The frontend sends user requests to the backend, which securely processes them and returns AI-generated responses.

---

# Base URL

Development

```
http://localhost:5000/api
```

Production

```
https://YOUR-AWS-URL/api
```

---

# Endpoint

## POST /api/ai/chat

### Description

Generates AI responses based on the selected learning tool.

---

### Request Body

```json
{
  "prompt": "Explain Binary Trees",
  "tool": "explain"
}
```

---

### Available Tools

| Tool | Description |
|------|-------------|
| chat | General AI Assistant |
| summarize | Notes Summarizer |
| quiz | Quiz Generator |
| flashcards | Flashcard Generator |
| explain | Beginner Friendly Explanation |

---

### Successful Response

```json
{
  "success": true,
  "response": "Binary Trees are..."
}
```

---

### Error Response

```json
{
  "success": false,
  "message": "Something went wrong."
}
```

---

# Request Flow

User

↓

React

↓

Axios

↓

Express API

↓

Gemini Service

↓

Gemini API

↓

Response

---

# Security

- API key stored in `.env`
- API key never exposed to frontend
- Backend validates requests
- CORS enabled
- JSON parsing enabled

---

# Environment Variables

Server

```
GEMINI_API_KEY=YOUR_API_KEY
PORT=5000
```

Client

```
VITE_API_URL=http://localhost:5000/api
```

---

# Technologies

- Express.js
- Node.js
- Axios
- Google Gemini API