import React, { useEffect, useState } from "react";
import AboutModal from "./about-modal/AboutModal";
import {
  FaInstagram,
  FaYoutube,
  FaBars,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";
// import "./NavBar.css";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

interface NavBarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  pageTitle: string;
}

const NavBar: React.FC<NavBarProps> = ({ isSidebarOpen, toggleSidebar, pageTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showTitleOnly, setShowTitleOnly] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowTitleOnly(true);
      } else {
        setShowTitleOnly(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav className={`navbar ${isSidebarOpen ? "shifted" : ""}`}>
        {showTitleOnly ? (
          <div className="navbar-title-only">
            <div className="navbar-title-left">
              <h1>W</h1>
              <p><span>NOW READING:</span> {pageTitle}</p>
            </div>
            <div className="navbar-title-right">
              <span>SHARE THIS:</span>
              <div className="navbar0title-right-icons">
                <Image src="/assets/icons/x-icon-black.png" className="icon" alt="X" width={24}  
  height={24} />
                <FaFacebookF className="icon" />
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Left: Logo & Navigation */}
            <div className="nav-left">
              <div className="menu-icon" onClick={toggleSidebar}>
                <FaBars className={`icon ${isSidebarOpen ? "open" : ""}`} />
              </div>
              <ul className="nav-links">
                <li><a href="/">INTRO</a></li>
              </ul>
            </div>

            <div className="logo">
              <a href="/">WENA ANEW</a>
            </div>

            {/* Right: Icons & Dropdown */}
            <div className="nav-icons">
              <div className="icon-nav-dropdown">
                <div className="dropdown-trigger">
                  <div className="right-nav-icon">
                    <Image src="/assets/icons/instagram.svg" className="icon" alt="Instagram" width={24}  
  height={24} /> 
                    <Image src="/assets/icons/x-icon-black.png" className="x-icon" alt="X"
                     style={{ marginTop: 2 }} width={24}  
  height={24} />
                    <FaYoutube className="icon" />
                  </div>

                  <div className="chevron-dropdown">
                    <Image src="/assets/icons/ios-arrow-down.svg" className="icon arrow-down" alt="arrow-down"
                     style={{ marginTop: 6 }} width={24}  
  height={24} />
                   <div className="chevron-dropdown-menu">
                      <div className="icon-container">
                        <Image src="/assets/icons/x-icon-black.png" className="icon" alt="X" width={24}  
  height={24} />
                        <span>X</span>
                      </div>
                      <div className="icon-container">
                        <FaYoutube className="icon" />
                        <span>YouTube</span>
                      </div>
                      <div className="icon-container">
                        <FaInstagram className="icon" />
                        <span>Instagram</span>
                      </div>
                      <div className="icon-container">
                        <FaTiktok className="icon" />
                        <span>Tiktok</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dropdown">
                <div className="dropdown-trigger">
                  <span>INFO</span>
                  <Image src="/assets/icons/ios-arrow-down.svg" className="icon arrow-down" alt="arrow-down" width={24}  
  height={24} />
                </div>
                <div className="dropdown-menu">
                  <a href="#" role="button" onClick={() => setIsAboutOpen(true)}>WENA</a>
                  <a href="/">Sponsors</a>
                  <a href="/">Partners</a>
                  <a href="/">Support</a>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="mobile-menu" onClick={toggleMenu}>
              <span>ME</span>
              <span>NU</span>
            </div>
          </>
        )}
      </nav>

      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default NavBar;
