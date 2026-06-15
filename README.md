<div align="center">
<br/>
<img src="https://img.shields.io/badge/Python-AI%20Powered-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
<img src="https://img.shields.io/badge/FastAPI-Backend%20API-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI"/>
<img src="https://img.shields.io/badge/OpenRouter-LLM%20Integration-6C63FF?style=for-the-badge" alt="OpenRouter"/>
<img src="https://img.shields.io/badge/Swagger-API%20Docs-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger"/>

🤖 AI Web Assistant

Intelligent Conversational Backend Powered by FastAPI & LLM APIs

An AI-powered conversational backend that enables intelligent interactions through REST APIs using OpenRouter-powered Large Language Models.
Combines AI response generation, persistent memory, conversation logging, and modular backend architecture into one scalable application.

<br/>
</div>

⸻

📌 Project Overview

The AI Web Assistant is a backend service that enables users to communicate with a Large Language Model through HTTP endpoints.

It demonstrates how modern AI applications can integrate memory systems, prompt engineering, API architecture, and conversation tracking while maintaining a clean and modular codebase.

Component	Purpose
LLM Engine	Generates intelligent responses using OpenRouter
Memory System	Stores and recalls user-specific information
Logging Layer	Tracks conversation history with timestamps
REST API	Handles communication between clients and AI
Swagger UI	Interactive API testing and documentation

⸻

✨ Key Features

Feature	Description
🤖 AI Question Answering	Generates contextual responses using LLM APIs
🧠 Persistent Memory	Stores and recalls user information across sessions
📝 Conversation Logging	Maintains complete chat history with timestamps
⚡ FastAPI Backend	High-performance asynchronous API framework
📚 Swagger Documentation	Auto-generated API documentation and testing
🔧 Modular Architecture	Organized routes, services, memory, and utilities
🔄 Context-Aware Responses	Uses stored memory to improve future interactions
📡 Third-Party API Integration	Demonstrates real-world OpenRouter integration

⸻

🧠 AI Workflow

┌───────────────────────────────────────────────────────┐
│                AI Request Pipeline                    │
├───────────────────────────────────────────────────────┤
│ User Query                                            │
│       │                                                │
│       ▼                                                │
│ FastAPI Endpoint                                      │
│       │                                                │
│       ▼                                                │
│ Retrieve Stored Memory                                │
│       │                                                │
│       ▼                                                │
│ Construct Prompt                                      │
│       │                                                │
│       ▼                                                │
│ OpenRouter LLM                                        │
│       │                                                │
│       ▼                                                │
│ Generate Response                                     │
│       │                                                │
│       ▼                                                │
│ Log Conversation                                      │
│       │                                                │
│       ▼                                                │
│ Return Response                                       │
└───────────────────────────────────────────────────────┘

⸻

🏗️ System Architecture

┌─────────────────────────────┐
│          Client             │
│  Web App / Postman / UI     │
└──────────────┬──────────────┘
               │ HTTP Request
               ▼
┌─────────────────────────────┐
│          FastAPI            │
│         API Routes          │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       LLM Service Layer     │
│     OpenRouter Integration  │
└──────────────┬──────────────┘
               │
      ┌────────┴────────┐
      ▼                 ▼
┌────────────┐   ┌────────────┐
│   Memory   │   │   Logger   │
│ Management │   │ Conversation│
└────────────┘   └────────────┘

⸻

📊 Memory & Conversation System

Persistent Memory

Stores important user-provided information that can be reused in future conversations.

Capability	Description
Save Memory	Stores user-specific context
Recall Memory	Retrieves stored information when needed
Context Injection	Includes memory within prompts
User Personalization	Enables more relevant responses

Conversation Logging

Tracks every interaction for debugging, monitoring, and auditing.

Logged Data

User Query

AI Response

Timestamp

Conversation History

⸻

🛠️ Tech Stack

┌──────────────────┬──────────────────────────────────────────────┐
│  Layer           │  Technology                                  │
├──────────────────┼──────────────────────────────────────────────┤
│  Language        │  Python                                      │
│  Backend         │  FastAPI                                     │
│  API Server      │  Uvicorn                                     │
│  AI Provider     │  OpenRouter API                              │
│  Documentation   │  Swagger UI                                  │
│  Memory Storage  │  JSON / File-Based Storage                   │
│  Architecture    │  REST API                                    │
└──────────────────┴──────────────────────────────────────────────┘

⸻

🚀 Getting Started

Prerequisites

* Python 3.10+
* OpenRouter API Key
* pip

Installation

1. Clone the repository

git clone <repository-url>
cd ai-web-assistant

2. Install dependencies

pip install -r requirements.txt

3. Configure environment variables

Create a .env file:

OPENROUTER_API_KEY=your_api_key_here

4. Start the server

uvicorn app:app --reload

5. Open Swagger Documentation

http://127.0.0.1:8000/docs

⸻

📌 API Capabilities

Chat Endpoint

POST /chat

Example Request

{
  "message": "Who are you?"
}

Example Response

{
  "response": "I am an AI assistant designed to help answer your questions."
}

⸻

📁 Project Structure

ai-web-assistant/
│
├── app.py                     # FastAPI application entry point
├── requirements.txt           # Python dependencies
│
├── routes/
│   └── chat.py                # Chat API endpoints
│
├── services/
│   ├── llm_service.py         # OpenRouter integration
│   └── memory.py              # Persistent memory logic
│
└── utils/
    └── logger.py              # Conversation logging

⸻

🌱 What This Project Demonstrates

✅ FastAPI Backend Development
✅ REST API Design & Implementation
✅ OpenRouter API Integration
✅ AI Application Development
✅ Prompt Engineering Concepts
✅ Persistent Memory Systems
✅ Conversation Logging & Monitoring
✅ Modular Software Architecture
✅ Production-Ready Backend Design
✅ API Documentation using Swagger UI

⸻

🔮 Future Enhancements

🔹 User Authentication & Authorization
🔹 Database-Based Memory Storage
🔹 Vector Database Integration
🔹 Multi-User Session Management
🔹 Semantic Memory Retrieval
🔹 Streaming AI Responses
🔹 WebSocket Communication
🔹 Frontend Dashboard
🔹 Analytics & Usage Monitoring

⸻

🔖 Version

Version	Description
v1.0.0	Initial release — AI conversational backend with memory and logging

⸻

👤 Author

Charanpreet Singh
B.Tech CSE

⸻

<div align="center">

Built with FastAPI · Powered by OpenRouter · Designed for Scalable AI Applications

<br/>

Found this useful? Give it a ⭐ on GitHub!

</div>
