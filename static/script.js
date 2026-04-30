async function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const userText = input.value.trim();

    if (!userText) return;

    chatBox.innerHTML += `<div class="message user">${userText}</div>`;
    input.value = "";

    const typingDiv = document.createElement("div");
    typingDiv.className = "message bot";
    typingDiv.innerText = "AI is typing...";
    chatBox.appendChild(typingDiv);

    chatBox.scrollTop = chatBox.scrollHeight;

    const response = await fetch("/ask", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ query: userText })
    });

    const data = await response.json();

    typingDiv.remove();

    chatBox.innerHTML += `<div class="message bot">${data.response}</div>`;

    chatBox.scrollTop = chatBox.scrollHeight;
}