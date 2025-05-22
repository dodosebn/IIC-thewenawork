"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import items from "./mapps";

type SidebarProps = {
  isOpen: boolean;
  setActiveIndex: (index: number) => void;
  activeIndex: number;
};

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  setActiveIndex,
  activeIndex,
}) => {
  const sidebarListRef = useRef<HTMLDivElement>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    const sidebarList = sidebarListRef.current;
    const clickedItem = sidebarList?.children[index] as HTMLElement;
    if (sidebarList && clickedItem) {
      sidebarList.scrollTo({
        top: clickedItem.offsetTop - sidebarList.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`
      fixed top-0 left-0 w-[280px] bg-[#f5f5f5] h-screen flex flex-col z-20
      ${window.innerWidth <= 1178 ? (isOpen ? "left-0" : "left-[-283px]") : ""}
      transition-all duration-300 ease-in-out
    `}>
      {/* Sidebar Header */}
      <div className="
        flex items-center justify-center bg-[#f5f5f5] h-[66px]
        border-b border-[#e4e2e2] sticky top-0
      ">
        <span className="
          font-['avenir-next'] text-[13px] tracking-[1.2px]
          text-[#494949] font-thin
        ">
          WENA PROJECT
        </span>
      </div>

      {/* Scrollable Sidebar List */}
      <div 
        ref={sidebarListRef}
        className="
          flex-1 bg-[#f5f5f5] overflow-y-auto border-r border-[#e4e2e2]
          scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-[#bbb]
        "
      >
        {items.map((item, index) => (
          <Link href={item.path} key={index} passHref>
            <div className="flex justify-center px-4">
              <div
                className={`
                  w-full max-w-[240px] border-b border-[#e4e2e2] py-6 cursor-pointer
                  transition-colors duration-300 ease-in-out
                  ${index === activeIndex ? "bg-[#f9f9f9]" : "hover:bg-[#f9f9f9]"}
                `}
                onClick={() => handleClick(index)}
              >
                {/* Image Container */}
                <div className="relative w-full h-[150px] overflow-hidden mx-auto">
                  <Image
                    src={item.img}
                    alt="Sidebar Item"
                    fill
                    className="object-cover"
                  />
                  {index === activeIndex && (
                    <div className="
                      absolute inset-0 bg-black/60 flex
                      justify-center items-center
                    ">
                      <span className="
                        text-white text-[12px] uppercase
                        font-['avenir-next'] tracking-[1.5px]
                        font-extrabold
                      ">
                        {item.activeLabel}
                      </span>
                    </div>
                  )}
                </div>
                {/* Sidebar Text */}
                <p className="
                  text-[13px] text-[#181818] font-['avenir-next']
                  mt-[10px] text-center
                ">
                  {item.text}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;