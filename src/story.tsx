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
          Quick Story
        </h1>

        <div className="text-2xl  flex  gap-3 justify-center mb-8 animate__animated animate__fadeIn animate__delay-2s "> <FaHeart/> <FaHeart/> <FaHeart/></div>
        <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-2s">
  It all started in Ijebu Ode. I wasn’t expecting much when I first visited, but everything changed when I met you, Tosin. I thought my feelings were one-sided, just a quiet admiration I’d keep to myself. Yet, I kept finding reasons to visit Ijebu Ode, hoping to see you, even if just for a moment.
</p>
<p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-3s text-white">
  Over time, we grew closer as friends. Your laughter, your kindness, and the way you carried yourself made every trip worthwhile. What I thought was unrequited love became something far more meaningful as we spent time together, sharing stories, moments, and joy.
</p>
<p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-4s">
  Now, I can’t imagine my life without you in it, Tosin. Ijebu Ode will always hold a special place in my heart because it brought me to you. I’m so grateful for the bond we’ve built, and I can’t wait to see what more we’ll create together.
</p>

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
