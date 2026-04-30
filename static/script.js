async function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const userMessage = input.value.trim();

    if (!userMessage) return;

    chatBox.innerHTML += `
        <div class="message user-message">${userMessage}</div>
    `;

    input.value = "";

    try {
        const response = await fetch("/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt: userMessage
            })
        });

        const data = await response.json();

        chatBox.innerHTML += `
            <div class="message bot-message">${data.response}</div>
        `;

        chatBox.scrollTop = chatBox.scrollHeight;

    } catch (error) {
        chatBox.innerHTML += `
            <div class="message bot-message">
                Error connecting to server.
            </div>
        `;
    }
}