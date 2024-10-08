import "../styles/Section.css";
import { useState } from "react";

export default function EducationSection({ educationInfo, setEducationInfo }) {
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
    setEducationInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="section">
      <h1>Education</h1>
      {isEditing ? (
        // Editable form
        <form onSubmit={handleSubmit}>
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
          <div className="btn-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        // Display submitted data with Edit button
        <div className="info-display">
          <p>
            <strong>School:</strong>{" "}
            {educationInfo.schoolName || "Loyola University"}
          </p>
          <p>
            <strong>Title of Study:</strong>{" "}
            {educationInfo.studyTitle || "B.S./M.S. in Civil Engineering"}
          </p>
          <p>
            <strong>GPA:</strong> {educationInfo.gpa || "3.98"}
          </p>
          <p>
            <strong>From:</strong> {educationInfo.studyFromDate || "08/1999"}
          </p>
          <p>
            <strong>To:</strong> {educationInfo.studyToDate || "05/2003"}
          </p>
          <div className="btn-container">
            <button onClick={handleEdit}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
}
