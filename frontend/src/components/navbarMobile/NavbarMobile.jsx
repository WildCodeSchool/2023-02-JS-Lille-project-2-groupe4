import React, { useState } from "react";
import { Link } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";
import logo from "../../assets/images/LOGO_FINAL_HELIUS_SN.png";
import "./NavbarMobile.css";

export default function MenuComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  return (
    <div id="outer-container">
      <Menu
        right
        width="100%"
        isOpen={menuOpen}
        onStateChange={(state) => handleStateChange(state)}
      >
        <Link
          id="home"
          className="menu-item"
          to="/"
          onClick={() => closeMenu()}
        >
          Home
        </Link>
        <div className="separator" />
        <Link
          id="about"
          className="menu-item"
          to="/articles"
          onClick={() => closeMenu()}
        >
          Articles
        </Link>
        <div className="separator" />
        <Link
          id="contact"
          className="menu-item"
          to="/spacecrafts"
          onClick={() => closeMenu()}
        >
          Spacecrafts
        </Link>
        <div className="separator" />
        <Link
          id="contact"
          className="menu-item"
          to="/astronauts"
          onClick={() => closeMenu()}
        >
          Astronauts
        </Link>
        <div className="separator" />
        <Link
          id="contact"
          className="menu-item"
          to="/inmemoriam"
          onClick={() => closeMenu()}
        >
          In Memoriam
        </Link>
        <div className="separator" />
        <Link
          id="contact"
          className="menu-item"
          to="/aboutus"
          onClick={() => closeMenu()}
        >
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
