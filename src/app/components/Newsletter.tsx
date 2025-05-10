"use client";
import React, { useState } from "react";
import Image from "next/image";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-[var(--color-black)] relative z-10 w-[800px] mt-15 border-2 border-[var(--color-golden)]  flex flex-col justify-center items-center mb-16">
      <div className="mb-4">
        <h1 className="font-(family-name:--font-base) text-2xl mb-2 mt-4">
          Newsletter
        </h1>
        <Image
          src="/assets/spoon.png"
          alt="spoon"
          width={45}
          height={40}
          className="mx-auto"
        />
      </div>
      <h2 className="text-4xl sm:text-5xl font-(family-name:--font-base) text-[var(--color-golden)] mb-8">
        Subscribe To Our Newsletter
      </h2>
      <p className="font-(family-name:--font-base) text-white mb-8">
        And never miss latest Updates!
      </p>
      <div className="flex flex-col justify-center items-center gap-4 ">
        <input
          type="email"
          placeholder="Email Address"
          className="w-[600px] font-(family-name:--font-base) bg-transparent border focus:border-[var(--color-golden)] focus:outline-none focus:ring-1 focus:rounded focus:ring-[var(--color-golden)] py-3 px-4 text-white placeholder-gray-400 transition-all duration-200"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-golden text-white font-base py-3 px-8 hover:bg-opacity-90 transition">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
