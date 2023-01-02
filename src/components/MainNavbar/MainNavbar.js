import React from "react";
import "./MainNavbar.css";
import { images } from "../../constants";

const MainNavbar = () => {
  return (
    <div className="mainNavbar-navbar">
      <div className="mainNavbar-logo-name">
        <img src={images.whatsAppLogo} />
        WhatsApp
      </div>
      <div className="mainNavbar-menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </div>
    </div>
  );
};

export default MainNavbar;
