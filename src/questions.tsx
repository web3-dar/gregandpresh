import { useNavigate } from "react-router-dom";
import backgroundVideo from "./assets/her.mp4"; // Replace with your actual background video path

const Question = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline // Ensures the video plays inline on mobile
      ></video>

      {/* Dark Opacity Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-3xl mx-auto pt-32 px-6">
        <h1 className="text-3xl text-pink-400 font-bold mb-8 animate__animated animate__fadeIn animate__delay-1s">
          The Big Question
        </h1>
        <p className="text-sm mb-8 animate__animated animate__fadeIn animate__delay-2s">
        You’ve brought so much joy, laughter, and meaning to my life. I can’t picture my life without you. So, I have to ask…
        </p>

        <p className="text-3xl text-pink-300 mb-12 font-bold animate__animated animate__fadeIn animate__delay-3s">
          Will you be my girlfriend???
        </p>  

        <div className="flex gap-3 justify-center">
          <button
            className="px-7 py-3 text-sm bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-400 transform transition-all duration-300 ease-in-out"
            onClick={() => navigate("/thank-you")}
          >
            Yes, I will!
          </button>
          <button
            className="px-7 py-3 text-sm bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transform transition-all duration-300 ease-in-out"
            onClick={() => navigate("/thank-you")}
          >
            Of Course!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
