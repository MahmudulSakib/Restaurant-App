import React from "react";
import Image from "next/image";
import { wines, cocktails } from "@/constants/data";

const Menu = () => {
  return (
    <div
      className=" bg-[var(--color-black)] flex flex-col justify-center items-center py-16 md:px-35 md:gap-10"
      id="menu"
    >
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-4 text-center font-(family-name:--font-base)">
        <h3 className="text-white font-base text-3xl">
          Menu That Fits Your Palate
        </h3>
        <Image src="/assets/spoon.png" width={40} height={40} alt="spoon" />
        <h2 className="text-[var(--color-golden)] font-base text-[82px]">
          Today's Special
        </h2>
      </div>

      {/* Menu Content */}
      <div className="flex flex-col md:flex-row justify-center items-start w-full gap-8 md:gap-20">
        {/* Wine Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-white font-(family-name:--font-base) text-2xl mb-6 text-center">
            Wine & Juice
          </h3>

          <div className="space-y-4">
            {wines.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center gap-4"
              >
                <div className="flex-1">
                  <h4 className="text-[var(--color-golden)] text-lg font-(family-name:--font-base)">
                    {item.title}
                  </h4>
                  <p className="text-[var(--color-gray)] text-sm">
                    {item.tags}
                  </p>
                </div>
                <div className="w-16 border-t border-[var(--color-golden)] mx-4 flex-grow-0" />
                <h4 className="text-[var(--color-golden)] font-bold">
                  {item.price}
                </h4>
              </div>
            ))}
          </div>
        </div>
        {/* Cocktails Section */}
        <div>
          <Image
            src="/assets/menu.png"
            alt="cocktail"
            width={600}
            height={1200}
          />
        </div>

        {/* Cocktails Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-white font-(family-name:--font-base) text-2xl mb-6 text-center ">
            Cocktails
          </h3>

          <div className="space-y-4">
            {cocktails.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center gap-4"
              >
                <div className="flex-1">
                  <h4 className="text-[var(--color-golden)] text-lg font-(family-name:--font-base)">
                    {item.title}
                  </h4>
                  <p className="text-[var(--color-gray)] text-sm">
                    {item.tags}
                  </p>
                </div>
                <div className="w-16 border-t border-[var(--color-golden)] mx-4 flex-grow-0" />
                <h4 className="text-[var(--color-golden)] font-bold">
                  {item.price}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <button className="bg-[#dcca87] font-(family-name:--font-base) hover:bg-[#dcca87]/90 text-(--color-dark)  py-2 px-4 rounded-[5px] w-[180px] transition-colors duration-200 cursor-pointer mt-5 max-xl:mt-5">
          View More
        </button>
      </div>
    </div>
  );
};

export default Menu;
