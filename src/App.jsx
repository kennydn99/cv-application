import { useState } from "react";
import GeneralInfoSection from "./components/GeneralInfo";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Preview from "./components/Preview";
import "./App.css";

function App() {
  // State for general information
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  // State for Education
  const [educationInfo, setEducationInfo] = useState({
    schoolName: "",
    studyTitle: "",
    gpa: "",
    studyFromDate: "",
    studyToDate: "",
  });

  return (
    <>
      <div className="side">
        <GeneralInfoSection
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        ></GeneralInfoSection>
        <EducationSection
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
        ></EducationSection>
        <ExperienceSection></ExperienceSection>
      </div>
      <div className="main">
        <Preview
          generalInfo={generalInfo}
          educationInfo={educationInfo}
        ></Preview>
      </div>
    </>
  );
}

export default App;
