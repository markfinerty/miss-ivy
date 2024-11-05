import { useState } from "react";
import PropTypes from "prop-types";
import { FaDownload } from "react-icons/fa";

function MenuSection({ title, items, menuPdf }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const menuType = title.toLowerCase() === "food" ? "food" : "cocktails";

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <section id={title.toLowerCase()} className="scroll-mt-28">
      <div className="flex flex-col items-center md:space-y-24 space-y-6">
        <h2 className="bg-miss-ivy-green text-center font-bold md:text-6xl text-miss-ivy-gold border-double border-4 border-miss-ivy-gold text-3xl md:p-12 p-8">
          {toTitleCase(title)}
        </h2>

        <div className="flex flex-col items-center bg-miss-ivy-food text-white p-4 px-10 md:h-[42rem] h-[32rem] justify-center rounded-xl border-4 border-black w-[350px] xs:w-[750px] md:w-[950px] bg-left">
          <div className="relative w-full h-full flex items-center justify-center">
            {items.map((item, index) => (
              <div
                key={index}
                className={`absolute transition-opacity duration-500 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className={`rounded-xl border-2 ${
                    menuType === "cocktails"
                      ? "sm:h-[550px] w-auto"
                      : "w-auto object-cover"
                  }`}
                />
              </div>
            ))}
            <button
              onClick={prevSlide}
              className="absolute bottom-0 -left-3 z-10 p-2 text-white bg-black bg-opacity-50 rounded-full"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="absolute bottom-0 -right-3 z-10 p-2 text-white bg-black bg-opacity-50 rounded-full"
            >
              ▶
            </button>
          </div>
          {menuPdf && (
            <div className="mt-4">
              <a
                href={menuPdf}
                download={menuPdf}
                className="text-miss-ivy-green hover:underline hover:text-white font-semibold flex items-center"
              >
                Menu
                <FaDownload className="inline-block ml-2" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

MenuSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
  menuPdf: PropTypes.string,
};

export default MenuSection;
