import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import vid from "./assets/me_you.mp4";
import { FaHeart } from "react-icons/fa";
import TypingEffect from "react-typing-effect";

const Home = () => {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={vid}
        autoPlay
        loop
        muted
        playsInline // Ensures the video plays inline on mobile devices
      ></video>

      {/* Dark Opacity Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 z-10"></div>

      {/* Confetti */}
      {showConfetti && <Confetti width={width} height={height} />}

      {/* Content */}
      <div className="relative z-20 text-center">
        <div className="flex gap-3 justify-center">
          <div>
            <h1 className="text-5xl font-semibold text-white mb-6 animate__animated animate__fadeIn animate__delay-1s">
              Hiii Oluwabukola!
            </h1>
          </div>
          <div className="text-5xl font-semibold text-pink-400 mb-6 animate__animated animate__fadeIn animate__delay-1s">
            <FaHeart />
          </div>
        </div>

        {/* Typewriter Effect for Text */}
        <p className="text-xl text-white mb-8 animate__animated animate__fadeIn animate__delay-2s">
          <TypingEffect
            text="A journey full of love , your shakara and memories awaits us..."
            speed={100} // Speed of typing
            eraseSpeed={50} // Speed of erasing text
            typingDelay={500} // Delay before typing starts
            eraseDelay={2000} // Delay before text starts erasing
            cursor="|" // Custom cursor
          />
        </p>

        <button
          className="px-8 py-4 bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 transition duration-300 animate__animated animate__fadeIn animate__delay-3s"
          onClick={() => navigate("/story")}
        >
          Let's goooo!!!
        </button>
      </div>
    </div>
  );
};

export default Home;
