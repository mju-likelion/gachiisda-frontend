import React from "react";
import BackIcon from "./images/HeaderBackIcon.svg";
import HomeIcon from "./images/HeaderHomeIcon.svg";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="Header_BackIcon">
        <img className="Header_BackIcon_img" alt="BackIcon" src={BackIcon} />
        <div className="Header_BackIcon_Ment">이전화면</div>
      </div>
      <div className="Header_HomeIcon">
        <div className="Header_HomeIcon_Ment">처음화면</div>
        <img className="Header_HomeIcon_img" alt="HomeIcon" src={HomeIcon} />
      </div>
    </div>
  );
}

export default Header;
