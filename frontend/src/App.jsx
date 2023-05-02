import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ArticlesMobilePage from "./pages/ArticlesMobilePage";
import Agencies from "./pages/Agencies";
import SpaceCraft from "./pages/SpaceCraft";
import NavBar from "./components/navBar/NavBar";
import NavbarMobile from "./components/navbarMobile/NavbarMobile";
import Footer from "./components/footer/Footer";
import styles from "./App.module.css";
import Astronauts from "./pages/Astronauts";

import InMemoriamPage from "./pages/InMemoriamPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <NavBar />
        <NavbarMobile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pads" element={<Agencies />} />
          <Route path="/articles" element={<ArticlesMobilePage />} />
          <Route path="/spacecrafts" element={<SpaceCraft />} />
          <Route path="/astronauts" element={<Astronauts />} />
          <Route path="/inmemoriam" element={<InMemoriamPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
