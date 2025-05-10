"use client";

import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoToggle = () => {
    if (vidRef.current) {
      if (playVideo) {
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
      setPlayVideo(!playVideo);
    }
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <video
        ref={vidRef}
        src="/assets/meal.mp4"
        typeof="video/mp4"
        loop
        muted
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={handleVideoToggle}
          className="border-2 border-amber-300 bg-opacity-50 p-4 rounded-full hover:bg-opacity-70 transition cursor-pointer"
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Intro;
