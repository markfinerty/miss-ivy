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
      <main className="pt-16 flex flex-col w-screen min-screen md:space-y-24 space-y-6 items-center">
        <BannerSection />
        <div className="flex flex-col bg-miss-ivy-green rounded-3xl p-6 border-4 border-miss-ivy-gold border-double mx-2">
          <p
            ref={paragraphRef}
            className={`${
              isParagraphVisible ? "animate-slideIn delay-1000" : "opacity-0"
            } font-sans font-semibold text-center max-w-[100rem] lg:text-2xl md:text-xl text-white self-center`}
          >
            Nestled in the heart of Queen Street West, Miss Ivy is
            Toronto&apos;s premier destination for upscale Asian fusion cuisine.
            Our intimate ambiance, exquisite handcrafted cocktails, and
            carefully curated dishes make every visit an experience. Whether
            you&apos;re celebrating a special occasion or enjoying an elegant
            night out, Miss Ivy offers a sanctuary for unforgettable dining.
            Join us and discover a place where tradition meets innovation,
            perfect for any occasion.
          </p>
          <img
            src="/signature.png"
            alt="Ivy Golden Logo"
            className="w-80 self-center md:w-[25rem] md:self-end md:-translate-x-40 mt-12"
          />
        </div>
        <MenuSection
          title="Dining"
          items={menuItems.foodItems}
          menuPdf="/dining-menu.jpg"
        />
        <MenuSection
          title="Cocktails"
          items={menuItems.drinkItems}
          menuPdf="/cocktails-menu.jpg"
          isReversed={true} // Reverses the layout
        />
        <ContactSection />
      </main>
      <MyFooter />
    </>
  );
}

export default App;
