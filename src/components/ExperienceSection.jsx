import ButtonContainer from "./ButtonContainer";
import "../styles/Section.css";

export default function ExperienceSection() {
  return (
    <div className="section">
      <h1>Experience</h1>
      <div className="field">
        <label htmlFor="company">Company: </label>
        <input type="text" id="company" />
      </div>
      <div className="field">
        <label htmlFor="position">Position: </label>
        <input type="text" id="position" />
      </div>
      <div className="field">
        <label htmlFor="responsibilities">Responsibilities: </label>
        <textarea name="job-responsibilities" id="responsibilities"></textarea>
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
