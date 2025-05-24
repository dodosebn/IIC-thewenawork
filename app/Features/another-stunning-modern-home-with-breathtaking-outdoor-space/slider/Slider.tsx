"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import InfoOne from "../../interior-inspiration-to-kick-start-your-week/infoOne";

const Page: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Scroll to element by ID
  const scrollToElementById = (id: string): void => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = (): void => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Main content container with id */}
      <div id="top" className="min-h-screen">
        <InfoOne />
      </div>

      {/* Section 2 with id */}
      <div
        id="section2"
        className="min-h-[500px] bg-gray-100 rounded-md shadow-inner flex items-center justify-center p-4"
      >
        <p className="text-xl">This is Section 2</p>
      </div>

      {/* Navigation buttons */}
      <div className="fixed bottom-4 left-4 flex flex-col gap-2 z-50">
        <button
          onClick={() => scrollToElementById("top")}
          className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors shadow-md"
        >
          Top
        </button>
        <button
          onClick={() => scrollToElementById("section2")}
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
