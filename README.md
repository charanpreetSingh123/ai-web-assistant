# AI Web Assistant

An AI-powered conversational web assistant built with **FastAPI** and **OpenRouter API**, featuring persistent memory, conversation logging, and modular backend architecture.

---

## Overview

This project is a backend AI assistant API that allows users to interact with a Large Language Model through REST endpoints.

It supports:
- Asking AI questions
- Remembering user preferences/context
- Logging all conversations with timestamps
- Testing through Swagger UI

Designed to demonstrate backend development, API integration, and AI application building.

---

## Features

- **AI Question Answering**
  - Accepts user queries and returns AI-generated responses

- **Persistent Memory Support**
  - Stores user-shared information and recalls it in future prompts

- **Conversation Logging**
  - Saves all interactions with timestamps for debugging/history

- **REST API Backend**
  - Built using FastAPI with auto-generated Swagger docs

- **Modular Code Structure**
  - Clean separation of routes, services, utilities, and memory logic

---

## Tech Stack

- **Python**
- **FastAPI**
- **Uvicorn**
- **OpenRouter API**
- **REST APIs**

---

## Project Structure

```bash
ai-web-assistant/
│
├── app.py
├── requirements.txt
│
├── routes/
│   └── chat.py
│
├── services/
│   ├── llm_service.py
│   └── memory.py
│
└── utils/
    └── logger.py
