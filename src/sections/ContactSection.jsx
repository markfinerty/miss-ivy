import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import MyBanner from "../components/MyBanner";

function ContactSection() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    // Update screen width on resize
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="contact"
      className="text-white flex flex-col items-center justify-between md:space-y-24 space-y-6 scroll-mt-28 p-12 w-full"
    >
      <MyBanner title="Contact Us"></MyBanner>
      <div className="flex flex-col lg:flex-row md:space-x-12 items-center justify-center">
        <div className="flex flex-col items-center justify-center bg-gray-800 bg-opacity-70 p-6 md:p-10 rounded-xl max-w-lg space-y-8 text-center lg:w-full w-[350px]">
          {/* Address */}
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-miss-ivy-gold text-2xl" />
            <div>
              <p className="text-lg">502 Queen St W</p>
              <p className="text-lg">Toronto, ON M5V 2B3</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-miss-ivy-gold text-2xl" />
            <div>
              <p className="text-lg">Phone :</p>
              <a className="text-md hover:cursor-pointer hover:underline" href="tel:+14165070994">
                (416) 507-0994
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center space-x-3">
            <FaClock className="text-miss-ivy-gold text-2xl" />
            <div>
              <p className="text-lg">Hours :</p>
              <p className="text-md">Tue / Thur / Sun</p>
              <p className="text-md">7 PM - 12 AM</p>
              <p className="text-md">Friday / Saturday</p>
              <p className="text-md">7 PM - 1 AM</p>
            </div>
          </div>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
            <Footer.Icon
              href="https://www.facebook.com/profile.php?id=61564522005030"
              icon={BsFacebook}
              className="text-miss-ivy-gold"
            />
            <Footer.Icon
              href="https://www.instagram.com/missivytoronto/"
              target="_blank"
              icon={BsInstagram}
              className="text-miss-ivy-gold"
            />
            <a href="https://giggster.com" target="_blank">
              <img src="/giggster.png" className="w-5" />
            </a>
          </div>
        </div>
        {/* Google Maps Embed */}
        <div className="mt-10 w-full max-w-3xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.01302399984!2d-79.40389072382347!3d43.647897371102346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34ddbd16a053%3A0xf21766d5cd8fdbf9!2s502%20Queen%20St%20W%2C%20Toronto%2C%20ON%20M5V%202B3!5e0!3m2!1sen!2sca!4v1730321299667!5m2!1sen!2sca"
            width={screenSize < 1024 ? "350" : "600"}
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border-2 border-miss-ivy-gold mb-10"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
