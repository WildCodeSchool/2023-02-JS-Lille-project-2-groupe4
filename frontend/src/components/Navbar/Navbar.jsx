import React from "react";
import { Link } from "react-router-dom";
import Logo2 from "../../assets/images/Logo2.png";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={style.navbar}>
      <nav>
        <img className={style.ImgLog} src={Logo2} alt="Logo2.png" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Pads">Pads</Link>
          </li>
          <li>
            <Link to="/SpaceCraft">SpaceCraft</Link>
          </li>
          <li>
            <Link to="/Hof">Hall Of Fame</Link>
          </li>
          <li>
            <Link to="/InMemoriam">In Memoriam</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
