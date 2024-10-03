import ButtonContainer from "./ButtonContainer";
import "../styles/Section.css";

export default function EducationSection() {
  return (
    <div className="section">
      <h1>Education</h1>
      <div className="field">
        <label htmlFor="school">School: </label>
        <input type="text" id="school" />
      </div>
      <div className="field">
        <label htmlFor="study">Title of Study: </label>
        <input type="text" id="study" />
      </div>
      <div className="field">
        <label htmlFor="gpa">GPA: </label>
        <input type="text" id="gpa" />
      </div>
      <div className="field">
        <label htmlFor="from-date">From: </label>
        <input type="date" id="from-date" />
      </div>
      <div className="field">
        <label htmlFor="to-date">To: </label>
        <input type="date" id="to-date" />
      </div>
      <ButtonContainer></ButtonContainer>
    </div>
  );
}
