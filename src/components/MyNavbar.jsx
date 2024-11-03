import { Navbar } from "flowbite-react";
import { useState, useEffect } from "react";

export function MyNavbar() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    // Update screen width on resize
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const linkStyles =
    "text-miss-ivy-gold hover:!text-white hover:bg-hidden text-md text-center border-black border-b-2";

  return (
    <Navbar fluid className="bg-miss-ivy-green w-screen fixed z-20">
      <Navbar.Brand href="#top">
        <img
          src="/brand-name-golden.png"
          alt="Miss Ivy Logo"
          className="w-14 h-14"
        />
      </Navbar.Brand>
      <a
        href="#top"
        className={`fixed ml-[48%] w-10 ${
          screenSize >= 1400 ? "block" : "hidden"
        }`}
      >
        <img src="/icon-golden.png" />
      </a>
      <Navbar.Toggle className="hover:bg-black hover:border-2 border-miss-ivy-gold text-miss-ivy-gold focus:ring-0" />

      <Navbar.Collapse className="z-20 bg-miss-ivy-green lg">
        <Navbar.Link href="https://www.opentable.ca/r/miss-ivy-toronto?corrid=d2c2c43e-d0d0-449b-9550-28abfea43d60&p=2&sd=2024-10-28T19%3A00%3A00" className={`${linkStyles}`}>
          Reservations
        </Navbar.Link>
        <Navbar.Link href="#dining" className={`${linkStyles}`}>
          Dining
        </Navbar.Link>
        <Navbar.Link href="#cocktails" className={`${linkStyles}`}>
          Cocktails
        </Navbar.Link>
        <Navbar.Link href="#events" className={`${linkStyles}`}>
          Events
        </Navbar.Link>
        <Navbar.Link href="#contact" className={`${linkStyles}`}>
          Contact Us
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
