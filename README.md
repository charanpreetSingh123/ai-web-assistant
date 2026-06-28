<div align="center">

<br/>

<img src="https://img.shields.io/badge/Python-FastAPI-3B6D11?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
<img src="https://img.shields.io/badge/FastAPI-REST%20Backend-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI"/>
<img src="https://img.shields.io/badge/OpenRouter-LLM%20Integration-534AB7?style=for-the-badge&logo=openai&logoColor=white" alt="OpenRouter"/>
<img src="https://img.shields.io/badge/Swagger-API%20Docs-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger"/>

<br/><br/>

# 🤖 AI Web Assistant

### Conversational AI Backend with Persistent Memory and Conversation Logging

**A FastAPI-powered backend that connects to a Large Language Model via OpenRouter API.**  
Supports persistent memory, conversation history, modular architecture, and full REST API documentation via Swagger UI.



</div>

---

## 📌 Project Overview

The **AI Web Assistant** is a backend AI API that lets users interact with a Large Language Model through clean REST endpoints. It goes beyond a simple question answer system by adding **persistent memory** so the assistant can remember what users share across conversations, **conversation logging** with timestamps for full interaction history, and a **modular backend structure** that keeps routes, services, and utilities cleanly separated.

Built to demonstrate real-world backend development skills, LLM API integration, and production-ready code organisation.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🧠 **AI Question Answering** | Accepts user queries and returns LLM-generated responses via OpenRouter |
| 💾 **Persistent Memory** | Stores user-shared context and recalls it in future prompts automatically |
| 📝 **Conversation Logging** | Saves all interactions with timestamps for history and debugging |
| 🔌 **REST API Backend** | Built with FastAPI, auto-generates Swagger UI docs at `/docs` |
| 🏗️ **Modular Architecture** | Clean separation of routes, services, memory logic, and utilities |

---

## 🛠️ Tech Stack

```
┌──────────────────┬───────────────────────────────────────────────┐
│  Layer           │  Tools                                        │
├──────────────────┼───────────────────────────────────────────────┤
│  Language        │  Python                                       │
│  Framework       │  FastAPI                                      │
│  Server          │  Uvicorn                                      │
│  LLM Provider    │  OpenRouter API                               │
│  API Style       │  REST · JSON                                  │
│  Docs            │  Swagger UI (auto-generated)                  │
└──────────────────┴───────────────────────────────────────────────┘
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/chat/ask` | Send a question and get an AI-generated response |
| `POST` | `/chat/remember` | Store user context or preferences into memory |
| `GET` | `/chat/history` | Retrieve full conversation log with timestamps |

> Full interactive API documentation available at **http://localhost:8000/docs** via Swagger UI

---

## 📂 Project Structure

```
ai-web-assistant/
│
├── app.py                    # FastAPI app entry point
├── requirements.txt          # Python dependencies
│
├── routes/
│   └── chat.py               # API route definitions
│
├── services/
│   ├── llm_service.py        # OpenRouter API integration and LLM logic
│   └── memory.py             # Persistent memory storage and retrieval
│
└── utils/
    └── logger.py             # Conversation logging with timestamps
```

---

## 🚀 Getting Started

### Prerequisites
- Python 3.10+
- OpenRouter API key — get one at [openrouter.ai](https://openrouter.ai)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/charanpreetSingh123/ai-web-assistant.git
cd ai-web-assistant
```

**2. Install dependencies**
```bash
pip install -r requirements.txt
```

**3. Set up your API key**
```bash
# Create a .env file and add your OpenRouter key
OPENROUTER_API_KEY=your_api_key_here
```

**4. Start the server**
```bash
uvicorn app:app --reload
```

**5. Open Swagger UI**
```
http://localhost:8000/docs
```

---

## 🌱 What This Project Demonstrates

```
✅  FastAPI backend development with modular code structure
✅  LLM integration via OpenRouter API (supports multiple models)
✅  Persistent memory design for context-aware AI conversations
✅  Conversation logging with timestamps for history and debugging
✅  Auto-generated REST API documentation via Swagger UI
✅  Clean separation of routes, services, memory, and utilities
```

---

## 🔖 Version

| Version | Description |
|---|---|
| `v1.0.0` | Initial release — FastAPI backend with memory, logging, and LLM integration |

---

## 👤 Author

**Charanpreet Singh**  
B.Tech CSE — CGC University Mohali

[![GitHub](https://img.shields.io/badge/GitHub-charanpreetSingh123-24292e?style=flat-square&logo=github)](https://github.com/charanpreetSingh123)

---

<div align="center">

**Built with FastAPI · Powered by OpenRouter LLM · Designed for Real World AI Applications**

<br/>

*if you Found this useful? Give it a ⭐ on GitHub*

</div>
