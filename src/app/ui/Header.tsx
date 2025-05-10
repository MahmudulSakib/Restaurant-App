import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div
      className="bg-[var(--color-black)] flex justify-center items-start py-30 max-[930px]:flex-col max-[930px]:gap-10  max-[1545px]:px-20 xl:gap-[340px]"
      id="home"
    >
      <div className="flex flex-col justify-start gap-5">
        <h4 className="text-white text-xl font-(family-name:--font-base)">
          Chase The New Flavour
        </h4>
        <Image src="/assets/spoon.png" alt="spoon_img" width={30} height={10} />
        <h1 className="text-[var(--color-golden)] text-[82px] leading-20 font-(family-name:--font-base) max-[920px]:text-[45px] md:text-[65px]">
          The Key To Fine Dinning
        </h1>
        <p className="max-w-[600px] text-[20px] font-(family-name:--font-base) font-[400] text-white max-[1070px]:text-[18px]">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button className="bg-[#dcca87] font-(family-name:--font-base) hover:bg-[#dcca87]/90 text-(--color-dark)  py-2 px-4 rounded-[5px] w-[180px] transition-colors duration-200 cursor-pointer mt-15 max-xl:mt-5">
          Explore Menu
        </button>
      </div>
      <div>
        <Image
          src="/assets/welcome.png"
          alt="opening-img"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};

export default Header;
