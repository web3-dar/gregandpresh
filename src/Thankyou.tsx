import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Ensure you're using React Router
import { FaHeart } from "react-icons/fa";
import vid from "./assets/me_you.mp4";

const ThankYou = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // React Router hook for navigation

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const sendMessageToTelegram = async () => {
    const botToken = "8119231817:AAGAmxzBGY0vBPeVFM2hEEBbXkoAUGxm_HE"; // Replace with your actual bot token
    const chatId = "6837437455"; // Replace with your actual chat ID

    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const textMessage = message || "No message"; // Default message if textarea is empty

    const params = new URLSearchParams();
    params.append("chat_id", chatId);
    params.append("text", textMessage);

    try {
      const response = await fetch(telegramApiUrl, {
        method: "POST",
        body: params,
      });

      if (response.ok) {
        console.log("Message sent to Telegram!");
        alert("Osheyyy"); // Show the alert
        navigate("/"); // Redirect to the home page
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-lg w-full text-center p-8 rounded-xl shadow-2xl backdrop-blur-lg">
        <div className="flex justify-center gap-2">
          <h1 className="text-5xl font-semibold text-white mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Thank You!
          </h1>
          <FaHeart className="text-5xl font-semibold text-pink-400 mb-6 animate__animated animate__fadeIn animate__delay-1s" />
        </div>

        <p className="text-xl text-pink-300 mb-6 animate__animated animate__fadeIn animate__delay-2s">
          You’ve made me the happiest person today. I promise to cherish, support, and make every moment special.
        </p>

        {/* Romantic Quote */}
        <div className="mb-8 text-white">
          <div className="border-l-4 border-pink-500 pl-4 text-lg italic font-semibold">
            "Here’s to us and our amazing journey ahead! 🥂"
          </div>
        </div>

        {/* Message Box */}
        <div className="mb-8 mx-auto max-w-md p-6 rounded-lg shadow-lg bg-opacity-90 backdrop-blur-md">
          <h2 className="text-2xl font-semibold text-center mb-4 text-gray-200">
            Your Message
          </h2>
          <textarea
            className="w-full p-4 bg-gray-300 text-pink-700 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
            rows={6}
            value={message}
            onChange={handleMessageChange}
            placeholder="Let me know how you feel about this..."
          />
        </div>

        {/* Send Button */}
        <div className="mt-8">
          <button
            className="px-8 py-4 bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-400 transform transition-all duration-300 ease-in-out"
            onClick={sendMessageToTelegram}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
