from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Predefined responses
responses = {
    "hi": "Hello! How can I help you?",
    "hello": "Hi there! What can I do for you?",
    "how are you": "I'm just a bot, but I'm doing great! 😊",
    "bye": "Goodbye! Have a nice day!",
    "default": "I'm not sure how to respond to that. Try asking something else!"
}

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message", "").lower()

    # Get response or default reply
    bot_reply = responses.get(user_message, responses["default"])
    
    return jsonify({"reply": bot_reply})

if __name__ == "__main__":
    app.run(debug=True)
