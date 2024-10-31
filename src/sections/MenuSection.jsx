import { useState } from "react";
import PropTypes from "prop-types";
import { FaDownload } from "react-icons/fa";

function MenuSection({ title, items, menuPdf }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const menuType = title.toLowerCase() === "food" ? "food" : "drinks";

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
        {/* Title */}
        <h2 className="bg-miss-ivy-green text-center font-bold md:text-7xl text-miss-ivy-gold border-double border-4 border-miss-ivy-gold text-3xl md:p-12 p-8 ">
          {toTitleCase(title)}
        </h2>

        <div className="flex flex-col items-center bg-miss-ivy-food text-white p-4 px-10 h-[42rem] justify-center rounded-xl border-4 border-black">
          {/* Carousel Content */}
          <div className="flex relative max-w-screen-lg rounded-xl p-5 h-[42rem] items-center overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className="p-2 flex-shrink-0 w-full flex justify-center items-center"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className={`rounded-xl border-2 ${
                      menuType === "drinks"
                        ? "sm:h-[550px] w-auto"
                        : "w-[600px] object-cover"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute bottom-10 left-4 z-10 p-2 text-white bg-black bg-opacity-50 rounded-full"
            >
              ◀
            </button>

            <button
              onClick={nextSlide}
              className="absolute bottom-10 right-[.9rem] z-10 p-2 text-white bg-black bg-opacity-50 rounded-full"
            >
              ▶
            </button>
          </div>
          {menuPdf && (
            <div className="mt-4">
              <a
                href={menuPdf}
                download={`${title.toLowerCase()}-menu.pdf`}
                className="text-miss-ivy-green hover:underline hover:text-white font-semibold"
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
  menuImage: PropTypes.string.isRequired,
  menuPdf: PropTypes.string,
};

export default MenuSection;
