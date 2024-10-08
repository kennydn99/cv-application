import "../styles/Section.css";
import { useState } from "react";

export default function ExperienceSection({
  experienceInfo,
  setExperienceInfo,
}) {
  const [isEditing, setIsEditing] = useState(true); // Starts in editing mode

  // Handles form submission and switches to display mode
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false); // Switch to display mode after submitting
  };

  // Switch back to editing mode
  const handleEdit = () => {
    setIsEditing(true);
  };

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

      {isEditing ? (
        // Editable form
        <form onSubmit={handleSubmit}>
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
          <div className="btn-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        // Display submitted data with Edit button
        <div className="info-display">
          <p>
            <strong>Company:</strong>{" "}
            {experienceInfo.company || "Middleton, Maxwell and Schaum"}
          </p>
          <p>
            <strong>Position:</strong>{" "}
            {experienceInfo.position || "Structural Engineer"}
          </p>
          <p>
            <strong>Responsibilities:</strong>{" "}
            {experienceInfo.responsibilities ||
              "Applied creative and analytical problems solving skills to multiple advanced building systems."}
          </p>
          <p>
            <strong>From:</strong> {experienceInfo.expFromDate || "06/2003"}
          </p>
          <p>
            <strong>To:</strong> {experienceInfo.expToDate || "03/2005"}
          </p>
          <div className="btn-container">
            <button onClick={handleEdit}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
}
