import ButtonContainer from "./ButtonContainer";
import "../styles/Section.css";

export default function EducationSection({ educationInfo, setEducationInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="section">
      <h1>Education</h1>
      <div className="field">
        <label htmlFor="school-name">School: </label>
        <input
          type="text"
          name="schoolName"
          value={educationInfo.schoolName}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="study-title">Title of Study: </label>
        <input
          type="text"
          name="studyTitle"
          value={educationInfo.studyTitle}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="gpa">GPA: </label>
        <input
          type="text"
          name="gpa"
          value={educationInfo.gpa}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="from-date">From: </label>
        <input
          type="date"
          name="studyFromDate"
          value={educationInfo.studyFromDate}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="to-date">To: </label>
        <input
          type="date"
          name="studyToDate"
          value={educationInfo.studyToDate}
          onChange={handleChange}
        />
      </div>
      {/* <ButtonContainer></ButtonContainer> */}
    </div>
  );
}
