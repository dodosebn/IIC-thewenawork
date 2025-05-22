// app/(main)/layout.js
'use client';

import { useState, useEffect } from "react";
import Sidebar from "./SIDEBAR/sidebar";
import NavBar from "./NAVBAR/NavBar";
import { usePathname } from "next/navigation";

export default function MainLayoutRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [pageTitle, setPageTitle] = useState("Welcome to Home");
  const [showTitle, setShowTitle] = useState(false);

  // Map paths to their corresponding titles
  const pageConfig = [
    {
      path: "/Features/interior-inspiration-to-kick-start-your-week",
      title: "Interior inspiration to kick-start your week"
    },
    {
      path: "/Features/this-new-mediterranean-restaurant-in-miami-has-michelin-cred",
      title: "This new Mediterranean restaurant in Miami has Michelin cred"
    },
    {
      path: "/Features/stunning-modern-home-with-breathtaking-outdoor-space",
      title: "Stunning modern home with breathtaking outdoor space"
    },
    {
      path: "/Features/interior-six-inspiration-to-kick-start-your-week",
      title: "Interior six inspiration to kick-start your week"
    },
  ];

  // Sync active index with current path
  useEffect(() => {
    const index = pageConfig.findIndex(page => pathname?.startsWith(page.path));
    setActiveIndex(index);
  }, [pathname]);

  // Update title based on active index
  useEffect(() => {
    setPageTitle(
      activeIndex === -1 
        ? "Welcome to Home" 
        : pageConfig[activeIndex]?.title || ""
    );
  }, [activeIndex]);

  useEffect(() => {
    const onScroll = () => setShowTitle(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="layout">
      <Sidebar 
        isOpen={isSidebarOpen} 
        activeIndex={activeIndex} 
        setActiveIndex={setActiveIndex}
      />
      <div className="website-content">
        <NavBar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          pageTitle={showTitle ? pageTitle : ""}
        />
        {children}
      </div>
    </div>
  );
}