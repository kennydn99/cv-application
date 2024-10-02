import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Section from "./components/Section.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Section heading="General Information"></Section>
  </StrictMode>
);
