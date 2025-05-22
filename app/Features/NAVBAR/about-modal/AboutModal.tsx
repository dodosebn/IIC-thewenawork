'use client'
import React, { useEffect } from "react";
// import "./AboutModal.css";

// Define props interface
interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="about-modal-overlay">
      <div className="header-button-modal">
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
      <div className="about-modal-content">
        <div className="about-paragraph">
          <div className="journey-header">
            <h2 className="values-title">OUR JOURNEY</h2>
          </div>
          <p>
            Filosofi embodies the pursuit of wisdom and knowledge, principles that guide our vision for the future of African 
            cinema. Africa holds immense untapped potential in the film industry, but realizing this potential requires innovative 
            thinking and a fresh approach. Our team, made up of seasoned professionals with an average of 20 years of 
            experience in the film industry, brings together diverse expertise from various disciplines and countries. We are 
            united by a shared belief that the next generation of African films must break new ground by prioritizing global 
            standards, nurturing talented individuals, and producing commercially viable movies capable of achieving worldwide 
            distribution.
          </p>
          <p>
            Filosofi embodies the pursuit of wisdom and knowledge, principles that guide our vision for the future of African 
            cinema. Africa holds immense untapped potential in the film industry, but realizing this potential requires innovative 
            thinking and a fresh approach. Our team, made up of seasoned professionals with an average of 20 years of 
            experience in the film industry, brings together diverse expertise from various disciplines and countries. We are 
            united by a shared belief that the next generation of African films must break new ground by prioritizing global 
            standards, nurturing talented individuals, and producing commercially viable movies capable of achieving worldwide 
            distribution.
          </p>
          <p>
            Filosofi embodies the pursuit of wisdom and knowledge, principles that guide our vision for the future of African 
            cinema. Africa holds immense untapped potential in the film industry, but realizing this potential requires innovative 
            thinking and a fresh approach. Our team, made up of seasoned professionals with an average of 20 years of 
            experience in the film industry, brings together diverse expertise from various disciplines and countries. We are 
            united by a shared belief that the next generation of African films must break new ground by prioritizing global 
            standards, nurturing talented individuals, and producing commercially viable movies capable of achieving worldwide 
            distribution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
