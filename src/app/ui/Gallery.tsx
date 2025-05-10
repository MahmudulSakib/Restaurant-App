"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface CarouselImage {
  src: string;
}
interface CarouselProp {
  images: CarouselImage[];
  autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProp> = ({
  images,
  autoSlideInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, autoSlideInterval);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, autoSlideInterval]);

  return (
    <div
      className="relative w-[90%] max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="relative w-full aspect-video">
              <Image
                src={image.src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === currentIndex}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-all"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-all"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  const images = [
    { src: "/assets/gallery02.png" },
    { src: "/assets/gallery03.png" },
    { src: "/assets/gallery04.png" },
    { src: "/assets/gallery01.png" },
  ];

  return (
    <div className="bg-[var(--color-black)] px-40 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Text content */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-lg text-gray-500 font-semibold font-(family-name:--font-base)">
            Instagram
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#DCCA87] font-(family-name:--font-base)">
            Photo Gallery
          </h2>
          <p className="text-gray-300  text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>
          <button className="bg-[#DCCA87] hover:bg-[#DCCA87]/90 text-[var(--color-gray)] font-(family-name:--font-base) py-3 px-6 rounded transition-all duration-300 cursor-pointer mt-8">
            View More
          </button>
        </div>

        {/* Carousel */}
        <div className="md:w-1/2 w-full">
          <Carousel images={images} autoSlideInterval={3000} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
