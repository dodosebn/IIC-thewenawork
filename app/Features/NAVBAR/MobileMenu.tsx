import React, { useState } from "react";
// import "./MobileMenu.css";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import AboutModal from "./about-modal/AboutModal";

// Define props interface
interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className={`mobile-menu-container ${isOpen ? "open" : ""}`}>
      <div className="mobile-menu-content">
        {/* Close Button */}
        <button className="close-btn" onClick={toggleMenu}>
          x
        </button>

        <div className="menu-nav-inner">
          {/* Navigation Links */}
          <ul className="mobile-nav-links">
            <li><a href="/">INTRO</a></li>
            <li>
              <a
                href="#"
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  setIsAboutOpen(true);
                }}
              >
                ABOUT US
              </a>
            </li>
          </ul>

          <div className="mobile-menu-icon-container">
            <FaTiktok className="icon" />
            <img src="/assets/icons/instagram.svg" className="icon" alt="Instagram" />
            <img src="/assets/icons/x-icon-black.png" className="icon-x" alt="X" style={{ marginTop: 2 }} />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>

      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
  );
};

export default MobileMenu;
