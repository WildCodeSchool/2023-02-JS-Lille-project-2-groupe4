import React from "react";
import { Link } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";
import logo from "../../assets/images/LOGO_FINAL_HELIUS_SN.png";
import "./NavbarMobile.css";

export default function MenuComponent() {
  return (
    <div id="outer-container">
      <Menu right width="100%">
        <Link id="home" className="menu-item" to="/">
          Home
        </Link>
        <div className="separator" />

        <Link id="about" className="menu-item" to="/pads">
          Pads
        </Link>
        <div className="separator" />

        <Link id="contact" className="menu-item" to="/spacecrafts">
          Spacecrafts
        </Link>
        <div className="separator" />

        <Link id="contact" className="menu-item" to="/astronauts">
          Astronauts
        </Link>
        <div className="separator" />

        <Link id="contact" className="menu-item" to="/inmemoriam">
          In Memoriam
        </Link>
        <div className="separator" />

        <Link id="contact" className="menu-item" to="/aboutus">
          About us
        </Link>
      </Menu>
      <main id="page-wrap">
        <div className="navbar">
          <div className="logoContainer">
            <img className="logoImage" src={logo} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}
