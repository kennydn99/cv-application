import ButtonContainer from "./ButtonContainer";
import "../styles/Section.css";

export default function ExperienceSection({
  experienceInfo,
  setExperienceInfo,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperienceInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="section">
      <h1>Experience</h1>
      <div className="field">
        <label htmlFor="company">Company: </label>
        <input
          type="text"
          name="company"
          value={experienceInfo.company}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="position">Position: </label>
        <input
          type="text"
          name="position"
          value={experienceInfo.position}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="responsibilities">Responsibilities: </label>
        <textarea
          name="responsibilities"
          value={experienceInfo.responsibilities}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="field">
        <label htmlFor="from-date">From: </label>
        <input
          type="date"
          name="expFromDate"
          value={experienceInfo.expFromDate}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="to-date">To: </label>
        <input
          type="date"
          name="expToDate"
          value={experienceInfo.expToDate}
          onChange={handleChange}
        />
      </div>
      {/* <ButtonContainer></ButtonContainer> */}
    </div>
  );
}
