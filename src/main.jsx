import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Nabvar from "./layouts/Nabvar.jsx";
import Footer from "./layouts/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nabvar />
    <App />
    <Footer />
  </React.StrictMode>
);
