import { useNavigate } from "react-router-dom";
import storyBackground from "./assets/img.jpg"; // Replace with your actual background image path
import { FaHeart } from "react-icons/fa";

const Story = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center p-8"
      style={{
        backgroundImage: `url(${storyBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Opacity Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-pink-300 p-4 max-w-xl mx-auto pt-20">
        <h1 className="text-4xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s text-white" >
          Pepper
        </h1>

        <div className="text-2xl  flex  gap-3 justify-center mb-8 animate__animated animate__fadeIn animate__delay-2s "> <FaHeart/> <FaHeart/> <FaHeart/></div>


        <button
          className="px-6 py-3 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 transition duration-300"
          onClick={() => navigate("/compliments")}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Story;
