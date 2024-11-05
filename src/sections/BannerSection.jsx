import { useState, useEffect } from "react";
import { FaMusic, FaPause } from "react-icons/fa";

function BannerSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

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
    // Delay the animation by 1 second
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="top"
      className="border-l-2 border-black scroll-mt-28 bg-miss-ivy-banner min-h-[48rem] bg-cover bg-center flex justify-center items-center w-screen text-white text-center"
    >
      <audio id="background-music" src="/bg-music.mp3" autoPlay loop />
      <button
        onClick={toggleMusic}
        className="fixed top-24 left-4 bg-miss-ivy-green text-white font-semibold py-2 px-4 rounded-full transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-miss-ivy-gold hover:ring-miss-ivy-gold hover:ring-4 z-20"
      >
        {isPlaying ? <FaPause size={20} /> : <FaMusic size={20} />}
      </button>

      <h1
        className={`text-5xl font-semibold ${
          animationStarted ? "animate-slideIn" : "opacity-0"
        }`}
      >
        Welcome to Miss Ivy
      </h1>
    </section>
  );
}

export default BannerSection;
