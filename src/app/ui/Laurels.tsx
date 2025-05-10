import React from "react";
import Image from "next/image";
import { awards } from "@/constants/data";

const Laurels = () => {
  return (
    <div
      className="flex justify-center items-center gap-[580px] text-white py-30 max-[930px]:flex-col max-[1340px]:gap-[100px] max-[1600px]:gap-[300px]"
      id="awards"
    >
      <div>
        <h4 className="text-white font-(family-name:--font-base) text-2xl">
          Awards & Recognition
        </h4>
        <Image src="/assets/spoon.png" alt="spoon" width={40} height={40} />
        <h2 className="font-(family-name:--font-base) text-[var(--color-golden)] text-7xl py-10">
          Our Laurels
        </h2>

        {awards.map((item, idx) => (
          <div key={idx} className="flex justify-center items-center gap-5">
            <div className="py-5">
              <Image src={item.imgUrl} alt="award" width={80} height={80} />
            </div>
            <div>
              <h4 className="font-(family-name:--font-base) text-2xl text-[var(--color-golden)]">
                {item.title}
              </h4>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Image
          src="/assets/laurels.png"
          alt="laurels"
          width={600}
          height={800}
        />
      </div>
    </div>
  );
};

export default Laurels;
