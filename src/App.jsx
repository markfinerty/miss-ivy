import ReservationSection from "./sections/ReservationSection";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MenuSection from "./sections/MenuSection";
import ContactSection from "./sections/ContactSection";
import menuItems from "./data/menuItems";

function App() {
  return (
    <>
      <MyNavbar />
      <main className="pt-16 flex flex-col w-screen h-screen md:space-y-24 space-y-6 items-center overflow-y-scroll">
        <ReservationSection />
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
