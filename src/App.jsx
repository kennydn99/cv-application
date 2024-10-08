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
  const [educationInfo, setEducationInfo] = useState([
    {
      schoolName: "Loyola University",
      studyTitle: "B.S./M.S. in Civil Engineering",
      gpa: "4.0",
      studyFromDate: "1999-08-01",
      studyToDate: "2003-05-01",
      isEditing: false,
    },
  ]);

  // State for Experience
  const [experienceInfo, setExperienceInfo] = useState([
    {
      company: "Middleton, Maxwell and Schaum",
      position: "Structural Engineer",
      responsibilities:
        "Applied creative and analytical problems solving skills to multiple advanced building systems.",
      expFromDate: "2003-06-01",
      expToDate: "2005-03-01",
      isEditing: false,
    },
  ]);

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
        <ExperienceSection
          experienceInfo={experienceInfo}
          setExperienceInfo={setExperienceInfo}
        ></ExperienceSection>
      </div>
      <div className="main">
        <Preview
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
        ></Preview>
      </div>
    </>
  );
}

export default App;
