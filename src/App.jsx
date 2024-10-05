import { useState } from "react";
import GeneralInfoSection from "./components/GeneralInfo";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Preview from "./components/Preview";
// import "./App.css";

function App() {
  return (
    <>
      <div className="side">
        <GeneralInfoSection></GeneralInfoSection>
        <EducationSection></EducationSection>
        <ExperienceSection></ExperienceSection>
      </div>
      <div className="main">
        <Preview></Preview>
      </div>
    </>
  );
}

export default App;
