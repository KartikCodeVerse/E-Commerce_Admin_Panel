import React from "react";
import "./NavBar.css";
import navlogo from "../../assets/logo.png";
import navprofile from "../../assets/nav-profile.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} className="nav-logo" alt="" />
      <img src={navprofile} className="nav-profile" alt="" />
    </div>
  );
};

export default NavBar;
