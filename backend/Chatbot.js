import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);

    const sendMessage = async () => {
        if (!message.trim()) return;

        const response = await axios.post("http://127.0.0.1:5000/chat", { message });
        setChat([...chat, { user: message, bot: response.data.reply }]);
        setMessage("");
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Simple Chatbot</h2>
            <div style={{ border: "1px solid #ccc", padding: "10px", height: "300px", overflowY: "auto" }}>
                {chat.map((c, index) => (
                    <p key={index}>
                        <b>You:</b> {c.user} <br />
                        <b>Bot:</b> {c.bot}
                    </p>
                ))}
            </div>
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ marginRight: "10px", padding: "5px" }}
            />
            <button onClick={sendMessage} style={{ padding: "5px" }}>Send</button>
        </div>
    );
};


export default Chatbot;
