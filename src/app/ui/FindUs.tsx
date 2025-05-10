import React from "react";
import Image from "next/image";

const FindUs = () => {
  return (
    <div
      className=" flex justify-center items-start gap-120 py-30 px-30 max-[930px]:flex-col max-[930px]:gap-30"
      id="contact"
    >
      <div>
        <h4 className="text-white font-(family-name:--font-base) text-3xl mt-5 pt-5">
          Contact
        </h4>
        <Image
          className="mt-2"
          src="/assets/spoon.png"
          alt="spoon"
          height={40}
          width={40}
        />
        <h2 className="font-(family-name:--font-base) text-[var(--color-golden)] text-8xl mt-5">
          Find Us
        </h2>
        <div className="relative flex justify-center itesm-start">
          <p className="font-(family-name:--font-base) text-white font-[400] mt-10  text-xl">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
          </p>
        </div>
        <p className="text-[var(--color-golden)] font-(family-name:--font-base) text-2xl py-5">
          Openning Hours
        </p>
        <p className="text-white font-(family-name:--font-base) text-xl">
          Mon - Fri: 10:00 am - 02:00 am
        </p>
        <p className="text-white font-(family-name:--font-base) text-xl">
          Sat - Sun: 10:00 am - 03:00 am
        </p>
      </div>
      <div>
        <Image src="/assets/findus.png" alt="findus" height={400} width={600} />
      </div>
    </div>
  );
};

export default FindUs;
