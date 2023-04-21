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
    path: "agencies",
    element: <Agencies />,
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
