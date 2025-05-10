import React from "react";
import Image from "next/image";
const AboutUs = () => {
  return (
    <div
      className="relative  flex flex-col justify-center items-center  py-80 sm:h-[full] max-lg:py-40"
      id="about"
    >
      <Image
        src="/assets/G.png"
        alt="G"
        width={400}
        height={600}
        className="max-md:absolute z-0"
      />
      <div
        className="z-10 flex justify-center items-center max-md:flex-col  md:absolute lg:gap-40"
        id="about"
      >
        <div className="flex flex-col justify-end items-end px-10">
          <h4 className="font-(family-name:--font-base) text-[var(--color-golden)] text-4xl">
            About US
          </h4>
          <Image
            src="/assets/spoon.png"
            alt="spoon"
            width={40}
            height={40}
            className=""
          />
          <p className="max-w-[600px] tracking-wide font-(family-name:--font-base) text-right text-xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className="bg-[#dcca87] font-(family-name:--font-base) hover:bg-[#dcca87]/90 text-(--color-dark)  py-2 px-4 rounded-[5px] w-[180px] transition-colors duration-200 cursor-pointer mt-15 max-xl:mt-5">
            Know More
          </button>
        </div>
        <div className="">
          <Image src="/assets/knife.png" alt="knife" width={100} height={100} />
        </div>
        <div>
          <div className="flex flex-col justify-end items-start px-4">
            <h4 className="font-(family-name:--font-base) text-[var(--color-golden)] text-4xl">
              Our History
            </h4>
            <Image
              src="/assets/spoon.png"
              alt="spoon"
              width={40}
              height={40}
              className=""
            />
            <p className="max-w-[600px] tracking-wide font-(family-name:--font-base) text-left text-xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>
            <button className="bg-[#dcca87] font-(family-name:--font-base) hover:bg-[#dcca87]/90 text-(--color-dark)  py-2 px-4 rounded-[5px] w-[180px] transition-colors duration-200 cursor-pointer mt-15 max-xl:mt-5">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
