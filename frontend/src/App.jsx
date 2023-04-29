import React from "react";
<<<<<<< HEAD

import Astronauts from "./pages/Astronauts";
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArticlesMobilePage from "@pages/ArticlesMobilePage";
import Agencies from "@pages/Agencies";
import SpaceCraft from "@pages/SpaceCraft";
import NavBar from "./components/navBar/NavBar";
import NavbarMobile from "./components/navbarMobile/NavbarMobile";
import Footer from "./components/footer/Footer";
import styles from "./App.module.css";
import Home from "./pages/Home";
>>>>>>> dev

import "./App.css";

function App() {
  return (
<<<<<<< HEAD
    
=======
    <Router>
      <div className={styles.app}>
        <NavBar />
        <NavbarMobile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pads" element={<Agencies />} />
          <Route path="/articles" element={<ArticlesMobilePage />} />
          <Route path="/spacecrafts" element={<SpaceCraft />} />
          <Route path="/astronauts" element={<Home />} />
          <Route path="/inmemoriam" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
>>>>>>> dev
  );
}

export default App;
