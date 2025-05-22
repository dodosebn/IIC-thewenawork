"use client";

import React, { useEffect, useRef, useState } from "react";

interface Box {
  title: string;
  content: string;
}

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ isOpen, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeBox, setActiveBox] = useState<Box | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth <= 940 : false
  );

  const boxes: Box[] = [
    { title: "Title 1", content: "This is some content for box 1." },
    { title: "Title 2", content: "Details go here for box 2." },
    { title: "Title 3", content: "More information in box 3." },
    { title: "Title 4", content: "Description text for box 4." },
    { title: "Title 5", content: "Content specific to box 5." },
    { title: "Title 6", content: "Final info for box 6." },
  ];

  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 940);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile || activeBox || !containerRef.current) return;

    const container = containerRef.current;
    const boxElems = container.querySelectorAll<HTMLDivElement>(".preview-info-box");

    if (!boxElems.length) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    const radius = Math.min(containerWidth, containerHeight) * 0.35;
    const angleStep = (2 * Math.PI) / boxElems.length;

    boxElems.forEach((box, i) => {
      const angle = i * angleStep;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      box.style.left = `${x}px`;
      box.style.top = `${y}px`;
    });
  }, [isMobile, activeBox]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startX - endX > 50) {
      setCurrentIndex((prev) => (prev < boxes.length - 1 ? prev + 1 : prev));
    } else if (endX - startX > 50) {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="features-page">
      <h1>Features Page</h1>
      <div
        className="preview-info-box-container"
        ref={containerRef}
        style={{ position: "relative", height: "80vh" }}
      >
        {isMobile ? (
          <>
            <div
              className="mobile-slider-wrapper"
              style={{ overflow: "hidden" }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="mobile-slider"
                style={{
                  display: "flex",
                  width: `${boxes.length * 100}vw`,
                  transform: `translateX(-${currentIndex * 100}vw)`,
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                {boxes.map((box, index) => (
                  <div
                    className="preview-info-box"
                    key={index}
                    style={{
                      minWidth: "100vw",
                      boxSizing: "border-box",
                      padding: 20,
                      cursor: "pointer",
                    }}
                    onClick={() => setActiveBox(box)}
                  >
                    <div className="preview-info-box-content">
                      <h3>{box.title}</h3>
                      <p>{box.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="slider-dots"
              style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
            >
              {boxes.map((_, index) => (
                <div
                  key={index}
                  className={`slider-dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: index === currentIndex ? "black" : "lightgray",
                    margin: "0 5px",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </>
        ) : (
          boxes.map((box, index) => (
            <div
              className="preview-info-box"
              key={index}
              style={{
                position: "absolute",
                width: 150,
                height: 150,
                backgroundColor: "#eee",
                borderRadius: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
                cursor: "pointer",
                userSelect: "none",
              }}
              onClick={() => setActiveBox(box)}
            >
              <h3>{box.title}</h3>
              <p>{box.content}</p>
            </div>
          ))
        )}
      </div>

      {activeBox && (
        <div
          className="fullscreenBoxOverlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setActiveBox(null)}
        >
          <div
            className="fullscreenBoxContent"
            style={{
              backgroundColor: "white",
              padding: 30,
              borderRadius: 10,
              maxWidth: 600,
              width: "90%",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="closeFullBoxBtn"
              onClick={() => setActiveBox(null)}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                border: "none",
                background: "none",
                fontSize: 24,
                cursor: "pointer",
              }}
              aria-label="Close preview"
            >
              ✕
            </button>
            <h2>{activeBox.title}</h2>
            <p>{activeBox.content}</p>
          </div>
        </div>
      )}

      {/* Overlay close button for the whole modal */}
      <button
        onClick={onClose}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          background: "red",
          color: "white",
          border: "none",
          borderRadius: 5,
          padding: "10px 15px",
          cursor: "pointer",
          zIndex: 1100,
        }}
      >
        Close Preview
      </button>
    </div>
  );
};

export default PreviewModal;
