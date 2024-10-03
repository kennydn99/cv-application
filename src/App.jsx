import { useState } from "react";
import GeneralInfoSection from "./components/GeneralInfo";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
// import "./App.css";

function App() {
  return (
    <>
      <GeneralInfoSection></GeneralInfoSection>
      <EducationSection></EducationSection>
      <ExperienceSection></ExperienceSection>
    </>
  );
}

export default App;
