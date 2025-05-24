'use client';
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "../../../style/Slider.css";
import { TbArrowsDiagonal } from "react-icons/tb";
import SlideModal from "./SlideModal";
import Image from "next/image";

const images = [
  "assets/images/temp/header-image.jpg",
  "assets/images/temp/download.webp",
  "assets/images/temp/promo-1.jpg",
  "assets/images/temp/promo-2.jpg",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (


    <>
        <div className="slider-container">
        <div className="slider-inner-container">
            <div className="slider">
                <Image src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
              
            </div>
            <button className="prev" onClick={prevSlide}>
              <FaChevronLeft />
            </button>
            <button className="next" onClick={nextSlide}>
              <FaChevronRight />
            </button>

            <div className="slide-indicator">
          <p>{currentIndex + 1} OF {images.length}</p>
          <div onClick={() => setIsModalOpen(true)}>
          <TbArrowsDiagonal  className="resize-icon" />
          </div>
        </div>

        </div>
        </div>

           <SlideModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Slider;
