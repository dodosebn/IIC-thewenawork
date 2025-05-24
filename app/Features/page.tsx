"use client";

import React, { useRef, useEffect, useState } from "react";
import InfoOne from "./interior-inspiration-to-kick-start-your-week/infoOne";
import { FaArrowUp } from "react-icons/fa";

const Page = () => {
  const topRef = useRef<HTMLDivElement | null>(null);
  const section2Ref = useRef<HTMLDivElement | null>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToElement = (elementRef: React.RefObject<HTMLDivElement | null>) => {
    elementRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Main content container */}
      <div ref={topRef} className="min-h-screen">
        <InfoOne />
      </div>

      {/* Section 2 */}
      <div
        ref={section2Ref}
        className="min-h-[500px] bg-gray-100 rounded-md shadow-inner flex items-center justify-center p-4"
      >
        <p className="text-xl">This is Section 2</p>
      </div>

      {/* Navigation buttons */}
      <div className="fixed bottom-4 left-4 flex flex-col gap-2 z-50">
        <button
          onClick={() => scrollToElement(topRef)}
          className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors shadow-md"
        >
          Top
        </button>
        <button
          onClick={() => scrollToElement(section2Ref)}
          className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors shadow-md"
        >
          Section 2
        </button>
      </div>

      {/* Scroll to top button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Page;
