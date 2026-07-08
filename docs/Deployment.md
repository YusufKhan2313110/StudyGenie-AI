# Deployment Guide

## Local Development

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## Docker Deployment

Build and run the application:

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

## AWS Deployment

Platform:

AWS App Runner

Deployment Source:

GitHub Repository

Repository:

StudyGenie-AI

Branch:

main

Runtime:

Docker

---

## Environment Variables

```
GEMINI_API_KEY=YOUR_API_KEY
PORT=5000
```

---

## Deployment Steps

1. Push project to GitHub.
2. Connect repository to AWS App Runner.
3. Configure environment variables.
4. Deploy.
5. Verify HTTPS URL.
6. Test all AI tools.

---

## Production Checklist

- Frontend accessible
- Backend running
- Gemini API working
- Docker builds successfully
- Environment variables configured
- HTTPS enabled