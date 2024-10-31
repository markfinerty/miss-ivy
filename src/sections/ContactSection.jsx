import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

function ContactSection() {
  return (
    <section
      id="contact"
      className="text-white flex flex-col items-center justify-between md:space-y-24 space-y-6 scroll-mt-28 "
    >
      <h2 className="bg-miss-ivy-green text-center font-bold md:text-7xl text-miss-ivy-gold border-double border-4 border-miss-ivy-gold text-3xl md:p-12 p-8">
        Contact US
      </h2>

      <div className="flex flex-col lg:flex-row space-x-12 items-center">
        <div className="flex flex-col items-center bg-gray-800 bg-opacity-70 p-10 rounded-xl max-w-lg space-y-8 text-center lg:w-full">
          {/* Address */}
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-miss-ivy-gold text-2xl" />
            <div>
              <p className="text-xl">502 Queen St W</p>
              <p className="text-xl">Toronto, ON M5V 2B3</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-miss-ivy-gold text-2xl" />
            <div>
              <p className="text-xl font-semibold">Phone:</p>
              <p className="text-xl">(437) 553-5452</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center space-x-3">
            <FaClock className="text-miss-ivy-gold text-2xl" />
            <div>
              <p className="text-xl font-semibold">Hours:</p>
              <p className="text-xl">Wednesday - Sunday</p>
              <p className="text-xl">5 PM - Late</p>
            </div>
          </div>
        </div>
        {/* Google Maps Embed */}
        <div className="mt-10 w-full max-w-3xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.01302399984!2d-79.40389072382347!3d43.647897371102346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34ddbd16a053%3A0xf21766d5cd8fdbf9!2s502%20Queen%20St%20W%2C%20Toronto%2C%20ON%20M5V%202B3!5e0!3m2!1sen!2sca!4v1730321299667!5m2!1sen!2sca"
            width="450"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border-2 border-miss-ivy-gold"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
