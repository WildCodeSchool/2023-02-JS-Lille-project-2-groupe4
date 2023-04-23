import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/Home";
import Agencies from "./pages/Agencies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pads",
    element: <Agencies />,
  },
  {
    path: "/spacecrafts",
    element: <Home />,
  },
  {
    path: "/astronauts",
    element: <Home />,
  },
  {
    path: "/inmemoriam",
    element: <Home />,
  },
]);

function App() {
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
