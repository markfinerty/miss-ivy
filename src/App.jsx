import { useEffect, useRef, useState } from "react";
import BannerSection from "./sections/BannerSection";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MenuSection from "./sections/MenuSection";
import ContactSection from "./sections/ContactSection";
import menuItems from "./data/menuItems";

function App() {
  const paragraphRef = useRef(null);
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsParagraphVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentParagraphRef = paragraphRef.current;
    if (currentParagraphRef) {
      observer.observe(currentParagraphRef);
    }

    return () => {
      if (currentParagraphRef) {
        observer.unobserve(currentParagraphRef);
      }
    };
  }, []);

  return (
    <>
      <MyNavbar />
      <main className="pt-16 flex flex-col w-screen min-screen md:space-y-24 space-y-6 items-center ">
        <BannerSection />
        <p
          ref={paragraphRef}
          className={`${
            isParagraphVisible ? "animate-slideIn delay-1000" : "opacity-0"
          } text-center max-w-[100rem] lg:text-2xl md:text-xl text-white`}
        >
          Nestled in the heart of Queen Street West, Miss Ivy is Toronto&apos;s
          premier destination for upscale Asian fusion cuisine. Our intimate
          ambiance, exquisite handcrafted cocktails, and carefully curated
          dishes make every visit an experience. Whether you&apos;re celebrating
          a special occasion or enjoying an elegant night out, Miss Ivy offers a
          sanctuary for unforgettable dining. Join us and discover a place where
          tradition meets innovation, perfect for any occasion
        </p>
        <img src="/ivy-golden-both.png" alt="Ivy Golden Logo" className="h-60" />
        <MenuSection
          title="Dining"
          items={menuItems.foodItems}
          menuPdf="/dining-menu.pdf"
        />
        <MenuSection
          title="Cocktails"
          items={menuItems.drinkItems}
          menuPdf="/cocktails-menu.pdf"
          isReversed={true} // Reverses the layout
        />
        <ContactSection />
      </main>
      <MyFooter />
    </>
  );
}

export default App;
