import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";
import Info from "./Info";
import CloudImage from "./rain-clouds-png-27.png"; // Import cloud images
import React, { useState } from "react";
import "./index.scss";

function App() {
  const [city, setCity] = useState("Paris");
  return (
    <div>
      <div>
        <img
          src={CloudImage}
          alt="Cloud"
          className="cloud"
        />
      </div>
      <div className="App">
        <h1>React Weather App</h1>
        <Search setCity={setCity} />
        <div className="card-wrapper">
          <Info city={city} />
        </div>
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
