import { useNavigate } from "react-router-dom";
import backgroundVideo from "./assets/rose.mp4"; // Replace with your actual background video path

const Compliments = () => {
  const navigate = useNavigate();

  const compliments = [
    "Your laughter is my favorite sound.",
    "Your presence makes everything better.",
    "Your goofy side makes me laugh.",
    "You're beautiful both inside and out.",
    "Your positive vibes brighten my day.",
    "I am truly lucky to know someone like you."
  ];

  return (
    <div className="relative min-h-screen bg-cover bg-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark Opacity Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto pt-32 px-6">
        <h1 className="text-3xl font-semibold mb-8 animate__animated animate__fadeIn animate__delay-1s">
          What I Love About You
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {compliments.map((compliment, index) => (
            <div
              key={index}
              className="bg-white text-sm text-gray-800 p-3 rounded-lg shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <p className="text-sm font-medium">{compliment}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            className="px-8 py-4 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-300 hover:text-black transition duration-300"
            onClick={() => navigate("/question")}
          >
            CLICK HERE!!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Compliments;
