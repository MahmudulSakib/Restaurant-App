import React from "react";
import Image from "next/image";

const Chef = () => {
  return (
    <div className=" flex justify-center items-start gap-30 py-30 px-30">
      <div>
        <Image src="/assets/chef.png" alt="chef" height={600} width={800} />
      </div>
      <div>
        <h4 className="text-white font-(family-name:--font-base) text-3xl mt-5 pt-5">
          Chef's Word
        </h4>
        <Image
          className="mt-2"
          src="/assets/spoon.png"
          alt="spoon"
          height={40}
          width={40}
        />
        <h2 className="font-(family-name:--font-base) text-[var(--color-golden)] text-8xl mt-5">
          What We Believe In
        </h2>
        <div className="relative flex justify-center itesm-start">
          <Image
            className="absolute top-5 left-0"
            src="/assets/quote.png"
            width={40}
            height={40}
            alt="quote"
          />
          <p className="font-(family-name:--font-base) text-white font-[400] mt-10 ml-[42px] text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
        </div>
        <p className="font-(family-name:--font-base) text-[var(--color-golden)] text-5xl mt-20">
          Kevin Luo
        </p>
        <p className="text-white text-xl">Chef & Founder</p>
        <Image src="/assets/sign.png" alt="sign" width={400} height={200} />
      </div>
    </div>
  );
};

export default Chef;
