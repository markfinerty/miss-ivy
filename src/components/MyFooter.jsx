import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function MyFooter() {
  return (
    <Footer container className="bg-miss-ivy-green rounded-none">
      <div className="w-full flex flex-col items-center space-y-2 mb-4">
        <Footer.Copyright by="MissIvyToronto™" year={2024} className="text-miss-ivy-gold" />
        {/* SOCIALS */}
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
          <Footer.Icon
            href="#"
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
    </Footer>
  );
}
