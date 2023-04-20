import Navbar from "@components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
/* import Pads from "./components/Navbar/Pads";
import SpaceCraft from "./components/Navbar/SpaceCraft";
import Hof from "./components/Navbar/Hof";
import InMemoriam from "./components/InMemoriam"; */
import Home from "./components/Navbar/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*  <Route path="/Pads" element={<Pads />} />
        <Route path="/SpaceCraft" element={<SpaceCraft />} />
        <Route Path="/Hof" element={<Hof />} />
  <Route Path="/InMemoriam" element={<InMemoriam />} /> */}
      </Routes>
    </div>
  );
}

export default App;
