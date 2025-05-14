import { useState } from "react";
import PropTypes from "prop-types";
import MyHeader from "../components/MyBanner";
import { FaDownload } from "react-icons/fa";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

function MenuSection({ title, items, menuPdf }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const menuType = title.toLowerCase() === "dining" ? "dining" : "cocktails";

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
        <MyHeader title={toTitleCase(title)} />
        <div className="flex flex-col items-center bg-miss-ivy-food text-white p-4 px-10 md:h-[42rem] h-[32rem] justify-center rounded-xl border-4 border-black w-[350px] xs:w-[750px] md:w-[950px]">
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
                      : "w-full object-cover"
                  }`}
                />
              </div>
            ))}
            <button
              onClick={prevSlide}
              className="absolute -bottom-16 -left-3 z-10 text-2xl  bg-miss-ivy-green text-miss-ivy-gold rounded-full border-4 hover:bg-green-950 border-miss-ivy-gold border-double md:px-4 md:pr-5 md:py-1 p-1"
            >
              <GrCaretPrevious className="-translate-x-0.5 md:translate-x-0" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -bottom-16 -right-3 z-10 md:px-4 md:pl-5 md:py-1 text-2xl text-miss-ivy-gold bg-miss-ivy-green rounded-full border-4 border-miss-ivy-gold hover:bg-green-950 border-double p-1"
            >
              <GrCaretNext className="translate-x-0.5 md:translate-x-0" />
            </button>
          </div>
          {menuPdf && (
            <div className="mt-4">
              <a
                href={menuPdf}
                download={menuPdf}
                className="text-miss-ivy-gold bg-miss-ivy-green px-4 pl-5 py-1  border-4 border-double border-miss-ivy-gold hover:underline hover:text-white font-semibold flex items-center"
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
