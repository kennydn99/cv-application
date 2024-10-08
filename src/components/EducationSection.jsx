import "../styles/Section.css";
import { useState } from "react";

export default function EducationSection({ educationInfo, setEducationInfo }) {
  // Handles form submission and switches to display mode
  const handleSubmit = (e, index) => {
    e.preventDefault();
    // Update editing state of currnet entry to false
    setEducationInfo((prevState) => {
      const updatedInfo = [...prevState];
      updatedInfo[index].isEditing = false;
      return updatedInfo;
    });
  };

  // Switch back to editing mode for specific entry
  const handleEdit = (index) => {
    setEducationInfo((prevState) => {
      const updatedInfo = [...prevState];
      updatedInfo[index].isEditing = true;
      return updatedInfo;
    });
  };

  // Handle input change for specific entry
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setEducationInfo((prevState) => {
      const updatedInfo = [...prevState];
      updatedInfo[index][name] = value;
      return updatedInfo;
    });
  };

  // Add new blank education entry
  const addEducationEntry = () => {
    setEducationInfo((prevState) => [
      ...prevState,
      {
        schoolName: "",
        studyTitle: "",
        gpa: "",
        studyFromDate: "",
        studyToDate: "",
        isEditing: true, // Each entry has its own editing state
      },
    ]);
  };

  // Delete a specific Education entry
  const deleteEducationEntry = (index) => {
    setEducationInfo((prevState) => prevState.filter((_, i) => i !== index));
  };

  return (
    <div className="section">
      <h1>Education</h1>
      {educationInfo.map((entry, index) => (
        <div key={index}>
          {entry.isEditing ? (
            // Editable form for the current entry
            <form onSubmit={(e) => handleSubmit(e, index)}>
              <div className="field">
                <label htmlFor="school-name">School: </label>
                <input
                  type="text"
                  name="schoolName"
                  value={entry.schoolName}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="field">
                <label htmlFor="study-title">Title of Study: </label>
                <input
                  type="text"
                  name="studyTitle"
                  value={entry.studyTitle}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="field">
                <label htmlFor="gpa">GPA: </label>
                <input
                  type="text"
                  name="gpa"
                  value={entry.gpa}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="field">
                <label htmlFor="from-date">From: </label>
                <input
                  type="date"
                  name="studyFromDate"
                  value={entry.studyFromDate}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="field">
                <label htmlFor="to-date">To: </label>
                <input
                  type="date"
                  name="studyToDate"
                  value={entry.studyToDate}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="btn-container">
                <button type="submit">Submit</button>
                <button
                  type="button"
                  onClick={() => deleteEducationEntry(index)}
                >
                  Delete
                </button>
              </div>
            </form>
          ) : (
            // Display data with an Edit button
            <div className="info-display">
              <p>
                <strong>School:</strong> {entry.schoolName}
              </p>
              <div className="btn-container">
                <button onClick={() => handleEdit(index)}>Edit</button>
              </div>
            </div>
          )}
        </div>
      ))}

      <button onClick={addEducationEntry}>Add Education</button>
    </div>
  );
}
