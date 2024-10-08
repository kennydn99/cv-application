import "../styles/Section.css";
import { useState } from "react";

export default function ExperienceSection({
  experienceInfo,
  setExperienceInfo,
}) {
  // Handles form submission and switches to display mode
  const handleSubmit = (e, index) => {
    e.preventDefault();
    setExperienceInfo((prevState) => {
      const updatedInfo = [...prevState];
      updatedInfo[index].isEditing = false;
      return updatedInfo;
    });
  };

  // Switch back to editing mode
  const handleEdit = (index) => {
    setExperienceInfo((prevState) => {
      const updatedInfo = [...prevState];
      updatedInfo[index].isEditing = true;
      return updatedInfo;
    });
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setExperienceInfo((prevState) => {
      const updatedInfo = [...prevState];
      updatedInfo[index][name] = value;
      return updatedInfo;
    });
  };

  const addExperienceEntry = () => {
    setExperienceInfo((prevState) => [
      ...prevState,
      {
        company: "",
        position: "",
        responsibilities: "",
        expFromDate: "",
        expToDate: "",
        isEditing: true,
      },
    ]);
  };

  const deleteExperienceEntry = (index) => {
    setExperienceInfo((prevState) => prevState.filter((_, i) => i !== index));
  };

  return (
    <div className="section">
      <h1>Experience</h1>

      {experienceInfo.map((entry, index) => (
        <div key={index}>
          {entry.isEditing ? (
            <form onSubmit={(e) => handleSubmit(e, index)}>
              <div className="field">
                <label htmlFor="company">Company: </label>
                <input
                  type="text"
                  name="company"
                  value={entry.company}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="field">
                <label htmlFor="position">Position: </label>
                <input
                  type="text"
                  name="position"
                  value={entry.position}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="field">
                <label htmlFor="responsibilities">Responsibilities: </label>
                <textarea
                  name="responsibilities"
                  value={entry.responsibilities}
                  onChange={(e) => handleChange(e, index)}
                ></textarea>
              </div>
              <div className="field">
                <label htmlFor="from-date">From: </label>
                <input
                  type="date"
                  name="expFromDate"
                  value={entry.expFromDate}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="field">
                <label htmlFor="to-date">To: </label>
                <input
                  type="date"
                  name="expToDate"
                  value={entry.expToDate}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="btn-container">
                <button type="submit">Submit</button>
                <button
                  type="button"
                  onClick={() => deleteExperienceEntry(index)}
                >
                  Delete
                </button>
              </div>
            </form>
          ) : (
            <div className="info-display">
              <p>
                <strong>Company:</strong> {entry.company}
              </p>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </div>
          )}
        </div>
      ))}

      <button onClick={addExperienceEntry}>Add Experience</button>
    </div>
  );
}
