async function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const userText = input.value.trim();

    if (!userText) return;

    chatBox.innerHTML += `<div class="message user">${userText}</div>`;
    input.value = "";

    chatBox.innerHTML += `<div class="message bot" id="typing">Typing...</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const response = await fetch("/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt: userText })
        });

        const data = await response.json();

        document.getElementById("typing").remove();

        chatBox.innerHTML += `<div class="message bot">${data.response}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;

    } catch (error) {
        document.getElementById("typing").remove();

        chatBox.innerHTML += `<div class="message bot">Error connecting to server.</div>`;
    }
}

document.getElementById("user-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
