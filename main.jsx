import React from "react";
import ReactDOM from "react-dom/client";
import RutinaJessica from "./RutinaJessica";
import './style.css';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RutinaJessica />
  </React.StrictMode>
);
