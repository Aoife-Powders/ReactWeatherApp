import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";
import Info from "./Info";
import React, { useState } from "react";
import "./index.css";

function App() {
  const [city, setCity] = useState("Paris");
  return (
    <div className="App">
      <Search setCity={setCity} />
      <Info city={city} />
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
