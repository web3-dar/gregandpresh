import { useRef,  useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Story from "./story";
import Compliments from "./compliment";
import Question from "./questions";
import ThankYou from "./Thankyou";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import sound from "./assets/Love Someone.mp3";

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false); // Start with play button visible

  // Start playing music only when user clicks the play button
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Error playing the audio:", error);
        });
        setIsMusicPlaying(true);
      }
    }
  };

  return (
    <Router>
      <div className="relative">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/compliments" element={<Compliments />} />
          <Route path="/question" element={<Question />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>

        {/* Sticky Music Control */}
        <div className="fixed bottom-4 right-4 z-20">
          <button onClick={handlePlayPause} className="text-pink-500 text-5xl">
            {isMusicPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
          </button>
        </div>

        {/* Background Music */}
        <audio ref={audioRef} src={sound} loop />
      </div>
    </Router>
  );
}

export default App;
