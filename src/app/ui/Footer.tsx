import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import FooterOverlay from "@/components/FooterOverlay";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";

const Footer = () => (
  <div
    className="relative font-(family-name:--font-base) text-white pt-16 pb-8 flex flex-col justify-center items-center"
    id="login"
  >
    <FooterOverlay />
    <Newsletter />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto mt-16">
      <div className="text-center md:text-left">
        <h1 className="text-golden  text-2xl mb-4">Contact Us</h1>
        <p className=" text-white mb-2">9 W 53rd St, New York, NY 10019, USA</p>
        <p className=" text-white mb-2">+1 212-344-1230</p>
        <p className=" text-white">+1 212-555-1230</p>
      </div>

      <div className="flex flex-col items-center">
        <Image
          src="/assets/gericht.png"
          alt="footer_logo"
          width={210}
          height={63}
          className="mb-4"
        />
        <p className=" text-white text-center  mb-4">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <Image
          src="/assets/spoon.png"
          alt="spoon"
          width={45}
          height={10}
          className="my-2"
        />
        <div className="flex gap-4 mt-4 text-white text-xl">
          <FiFacebook className="hover:text-golden cursor-pointer" />
          <FiTwitter className="hover:text-golden cursor-pointer" />
          <FiInstagram className="hover:text-golden cursor-pointer" />
        </div>
      </div>

      <div className="text-center md:text-right">
        <h1 className=" text-2xl mb-4">Working Hours</h1>
        <p className=" text-white mb-2">Monday-Friday:</p>
        <p className=" text-white mb-4">08:00 am - 12:00 am</p>
        <p className=" text-white mb-2">Saturday-Sunday:</p>
        <p className=" text-white">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="text-center mt-16">
      <p className=" text-white">2025 Gericht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
