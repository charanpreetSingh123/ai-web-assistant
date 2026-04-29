chat_history = []

def add_to_memory(user, bot):
    chat_history.append({"role": "user", "content": user})
    chat_history.append({"role": "assistant", "content": bot})

def get_memory():
    return chat_history[-6:]