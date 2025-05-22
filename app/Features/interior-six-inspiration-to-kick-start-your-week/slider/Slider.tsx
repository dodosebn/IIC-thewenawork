'use client';
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { TbArrowsDiagonal } from "react-icons/tb";
import Image from "next/image";
import SlideModal from "./SlideModal";

const images = [
  "/assets/images/temp/header-image.jpg",
  "/assets/images/temp/download.webp",
  "/assets/images/temp/promo-1.jpg",
  "/assets/images/temp/promo-2.jpg",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <>
      <div className="relative w-full h-[500px] overflow-hidden group rounded-lg">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          priority
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        
        <div className="absolute bottom-6 left-6 flex items-center gap-4 text-white">
          <p className="text-sm font-medium">{currentIndex + 1} OF {images.length}</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition"
            aria-label="Expand image"
          >
            <TbArrowsDiagonal className="text-lg" />
          </button>
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <FaChevronLeft className="text-white text-lg" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <FaChevronRight className="text-white text-lg" />
        </button>
      </div>

      <SlideModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        images={images} 
        initialIndex={currentIndex}
      />
    </>
  );
};

export default Slider;