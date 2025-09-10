// components/WhatsappWidget.js
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "918769207505"; // Replace with your number

  const sendMessage = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message || "Hello, I’d like to connect!"
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        type="button"
        className="fixed bottom-6 right-6 z-[9999] bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaWhatsapp size={28} />
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 max-w-sm bg-white rounded-2xl shadow-xl border border-gray-200 z-[9999]">
          <div className="p-4 flex flex-col h-[420px]">
            {/* Header */}
            <div className="flex items-center gap-2 border-b pb-2">
              <FaWhatsapp className="text-green-500" size={22} />
              <h2 className="font-semibold text-gray-800">
                Connect with us on WhatsApp
              </h2>
            </div>

            {/* Preset Message */}
            <div className="mt-4 bg-gray-100 p-3 rounded-lg text-sm text-gray-800 self-start max-w-[75%]">
              How can we help you? Feel free to ask us anything! 😊
              <div className="text-xs text-gray-500 mt-1">
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>

            {/* Spacer */}
            <div className="flex-grow"></div>

            {/* Input Bar */}
            <div className="border-t pt-3 mt-3 flex items-center gap-2">
              <input
                type="text"
                className="flex-grow border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="button"
                onClick={sendMessage}
                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsappWidget;
