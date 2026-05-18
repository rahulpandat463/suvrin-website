"use client";

import React from "react";
import Image from "next/image";

const Navbar = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => {
  return (
    <header className="sticky top-0 right-0 h-16 bg-white border-b border-border z-10 flex items-center justify-between px-8 transition-all duration-300">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-lg hover:bg-bg-secondary transition-colors text-xl text-text-secondary"
          aria-label="Toggle Sidebar"
        >
          ☰
        </button>
      </div>


    </header>
  );
};

export default Navbar;
