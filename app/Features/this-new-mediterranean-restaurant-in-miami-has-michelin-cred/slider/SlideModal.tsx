'use client';
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
// import "../../../style/SliderModal.css";
import { SlideModalProps } from "@/app/types";
const images = [
  "assets/images/temp/header-image.jpg",
  "assets/images/temp/download.webp",
  "assets/images/temp/promo-1.jpg",
  "assets/images/temp/promo-2.jpg",
];

const SlideModal = ({ isOpen, onClose }: SlideModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("Modal isOpen:", isOpen);

  if (!isOpen) return null; 

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
    <div className="modal-overlay">
      <div className="modal-content">
    <div className="modal-content-left">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} /> 
    </div>

        <div className="modal-sidebar">
            <div className="modal-slider-nav">
              <div className="sidebar-indicator">
                <p>
                {currentIndex + 1} OF {images.length}
                </p>
              </div>
              <div className="side-bar-prev" onClick={prevSlide}>
                  <FaChevronLeft />
              </div>
              <div className="side-bar-next" onClick={nextSlide}>
                  <FaChevronRight />
              </div>
              <div className="modal-close-btn" onClick={() => {
                console.log("Close div clicked"); 
                onClose();
                }}>
                <FaTimes />
              </div>
            </div>

             {/* Slide Counter */}
           
                <div className="modal-footer">
                        <p>FOLLOW US</p>
                  <div className="sidebar-social-icons">
                 <div>
                 <FaFacebookF />
                 </div>
                    <div>
                    <FaInstagram />
                    </div>
                  <div>
                  <FaYoutube />
                  </div>
                   <div>
                   <FaPinterest />
                   </div>
                </div>
                </div>
            
        </div>
      </div>
    </div>
  );
};

export default SlideModal;
