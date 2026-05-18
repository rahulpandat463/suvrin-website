"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto py-6 sticky bottom-0 z-10 justify-items-center px-8 border-t border-border bg-white transition-all duration-300">
      <p className="text-sm ">
        © {new Date().getFullYear()} Suvrin. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;
