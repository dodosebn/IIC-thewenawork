'use client'
import React, { useState } from 'react';
import Loading from '../Loading';
import PreviewModal from '../preview-modal/PreviewModal'; // adjust path as needed
import AboutModal from '../../Features/NAVBAR/about-modal/AboutModal'; // optional if you want AboutModal too
import Link from 'next/link';

const videoUrl = '/assets/videos/section-bg-video.mp4';

const Hero = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false); // optional

  return (
    <div>
      <Link href='/Features'>Features</Link>
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white gap-6">
        <h1 className="text-4xl font-bold">Welcome to Wena</h1>

        {/* Pass toggle function to Loading button */}
        <Loading onClick={() => setIsPreviewOpen(true)} />
      </div>

      {/* Your modals */}
      <PreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
    </div>
  );
};

export default Hero;
