import requests
import os
from dotenv import load_dotenv
from services.memory import get_memory, add_to_memory

load_dotenv()
API_KEY = os.getenv("OPENROUTER_API_KEY")


def get_response(prompt: str):
    try:
        messages = [
            {
                "role": "system",
                "content": "You are a helpful AI assistant. Use previous conversation history to answer follow-up questions accurately."
            }
        ]

        messages.extend(get_memory())

        messages.append({
            "role": "user",
            "content": prompt
        })

        response = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {API_KEY}",
                "Content-Type": "application/json"
            },
            json={
                "model": "openai/gpt-3.5-turbo",
                "messages": messages
            }
        )

        data = response.json()

        if "choices" not in data:
            return f"API Error: {data}"

        reply = data["choices"][0]["message"]["content"]

        add_to_memory(prompt, reply)

        return reply

    except Exception as e:
        return str(e)