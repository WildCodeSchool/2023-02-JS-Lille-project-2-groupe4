import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArticlesMobilePage from "@pages/ArticlesMobilePage";
import NavBar from "./components/navBar/NavBar";
import NavbarMobile from "./components/navbarMobile/NavbarMobile";
import Footer from "./components/footer/Footer";
import styles from "./App.module.css";
import Home from "./pages/Home";
import Agencies from "./pages/Agencies";

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
          <Route path="/spacecrafts" element={<Home />} />
          <Route path="/astronauts" element={<Home />} />
          <Route path="/inmemoriam" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
