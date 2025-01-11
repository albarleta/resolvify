import React, { useState, useRef, useEffect } from "react";

const MessengerChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey there!", sender: "other", timestamp: "10:00 AM" },
    { id: 2, text: "Hi! How are you?", sender: "self", timestamp: "10:01 AM" },
    {
      id: 3,
      text: "I'm doing great, thanks for asking!",
      sender: "other",
      timestamp: "10:02 AM",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const now = new Date();
      const timestamp = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: newMessage,
          sender: "self",
          timestamp,
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 border-r bg-white">
        <div className="border-b p-4">
          <h2 className="text-lg font-semibold">Chats</h2>
        </div>
        <div className="flex flex-col">
          {["John Doe", "Jane Smith", "Mike Johnson"].map((name, index) => (
            <div
              key={index}
              className="flex cursor-pointer items-center p-4 hover:bg-gray-100"
            >
              <div className="h-10 w-10 rounded-full bg-blue-500"></div>
              <div className="ml-4">
                <div className="font-semibold">{name}</div>
                <div className="text-sm text-gray-500">
                  Last message preview...
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="mx-auto flex max-w-lg flex-1 flex-col bg-white">
        {/* Chat Header */}
        <div className="flex items-center border-b bg-white p-4">
          <div className="h-10 w-10 rounded-full bg-blue-500"></div>
          <div className="ml-4">
            <div className="font-semibold">John Doe</div>
            <div className="text-sm text-green-500">Active Now</div>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "self" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                  message.sender === "self"
                    ? "rounded-br-none bg-blue-500 text-white"
                    : "rounded-bl-none bg-gray-200 text-gray-800"
                }`}
              >
                <p>{message.text}</p>
                <p
                  className={`mt-1 text-xs ${
                    message.sender === "self"
                      ? "text-blue-100"
                      : "text-gray-500"
                  }`}
                >
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="border-t bg-white p-4">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button className="rounded-md bg-blue-200 px-8 py-2">AI</button>
              <button className="rounded-md bg-blue-200 px-8 py-2">
                Human
              </button>
            </div>
            <button
              type="button"
              className="rounded-full p-2 hover:bg-gray-100"
            >
              <svg
                className="h-6 w-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Aa"
              className="flex-1 rounded-full bg-gray-100 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={!newMessage.trim()}
              className="rounded-full p-2 hover:bg-gray-100 disabled:opacity-50"
            >
              <svg
                className="h-6 w-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessengerChat;
