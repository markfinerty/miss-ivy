import { useState, useEffect } from "react";
import { FaMusic, FaPause } from "react-icons/fa";

function BannerSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [animationClass, setAnimationClass] = useState("animate-slideIn");

  const toggleMusic = () => {
    const audio = document.getElementById("background-music");
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // Check if screen size is md or larger
    const isMdScreen = window.matchMedia("(min-width: 768px)").matches;

    // Start the initial slideIn animation after a 500ms delay
    const timerIn = setTimeout(() => {
      setAnimationClass("animate-slideIn");
    }, 500);

    // Set a timer to trigger the slideOutRight animation after 3 seconds on md screens only
    let timerOut;
    if (isMdScreen) {
      timerOut = setTimeout(() => {
        setAnimationClass("absolute animate-slideOutRight");
      }, 3500);
    }

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(timerIn);
      if (timerOut) clearTimeout(timerOut);
    };
  }, []);

  return (
    <section
      id="top"
      className="border-l-2 border-black scroll-mt-28 bg-miss-ivy-banner sm:min-h-[45rem] min-h-[35rem] bg-cover bg-center flex justify-center items-center w-screen text-white text-center overflow-hidden"
    >
      <audio id="background-music" src="/bg-music.mp3" autoPlay loop />
      <button
        onClick={toggleMusic}
        className="fixed top-24 left-4 bg-miss-ivy-green text-white font-semibold py-2 px-4 rounded-full transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-miss-ivy-gold hover:ring-miss-ivy-gold hover:ring-4 z-20"
      >
        {isPlaying ? <FaPause size={20} /> : <FaMusic size={20} />}
      </button>

      <h1 className={`text-5xl sm:text-7xl font-semibold ${animationClass}`}>
        Welcome to Miss Ivy
      </h1>
    </section>
  );
}

export default BannerSection;
