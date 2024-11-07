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
                      ? "md:h-[550px] w-auto"
                      : "w-auto object-cover"
                  }`}
                />
              </div>
            ))}
            <button
              onClick={prevSlide}
              className="absolute -bottom-14 -left-3 z-10 text-2xl pb-1 px-4 pr-5 bg-miss-ivy-green text-miss-ivy-gold rounded-full border-4 hover:bg-green-950 border-miss-ivy-gold border-double"
            >
              &#9664;
            </button>
            <button
              onClick={nextSlide}
              className="absolute -bottom-14 -right-3 z-10 px-4 pl-5 pb-1 text-2xl text-miss-ivy-gold bg-miss-ivy-green rounded-full border-4 border-miss-ivy-gold hover:bg-green-950 border-double"
            >
              &#9654;
            </button>
          </div>
          {menuPdf && (
            <div className="mt-4">
              <a
                href={menuPdf}
                download={menuPdf}
                className="text-miss-ivy-gold bg-miss-ivy-green p-2 border-4 border-double border-miss-ivy-gold hover:underline hover:text-white font-semibold flex items-center"
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
