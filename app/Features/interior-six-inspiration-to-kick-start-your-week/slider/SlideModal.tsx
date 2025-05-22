'use client';
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes, FaFacebookF, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import Image from "next/image";

interface SlideModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
}

const SlideModal: React.FC<SlideModalProps> = ({ isOpen, onClose, images, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="flex w-full max-w-6xl h-[90vh] bg-white rounded-lg overflow-hidden">
        <div className="flex-1 relative">
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <div className="w-80 bg-gray-100 p-6 flex flex-col border-l border-gray-200">
          <div className="flex justify-between items-center mb-8">
            <p className="text-sm font-medium">{currentIndex + 1} OF {images.length}</p>
            <div className="flex gap-4">
              <button 
                onClick={prevSlide} 
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>
              <button 
                onClick={nextSlide} 
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>
              <button 
                onClick={onClose} 
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
            </div>
          </div>
          
          <div className="mt-auto">
            <p className="text-sm font-medium mb-4">FOLLOW US</p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                aria-label="Pinterest"
              >
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideModal;