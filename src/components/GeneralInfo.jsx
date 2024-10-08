import { useState } from "react";
import "../styles/Section.css";

export default function GeneralInfoSection({ generalInfo, setGeneralInfo }) {
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

  // Handles input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="section">
      <h1>General Info</h1>

      {isEditing ? (
        // Editable form
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="full-name">Full Name: </label>
            <input
              type="text"
              name="fullName"
              value={generalInfo.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              value={generalInfo.email}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone Number: </label>
            <input
              type="tel"
              name="phone"
              value={generalInfo.phone}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="address">Address: </label>
            <input
              type="text"
              name="address"
              value={generalInfo.address}
              onChange={handleChange}
            />
          </div>
          <div className="btn-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        // Display submitted data with Edit button
        <div className="info-display gen-info">
          <p>
            <strong>Full Name:</strong>{" "}
            {generalInfo.fullName || "Michael Scofield"}
          </p>
          <p>
            <strong>Email:</strong> {generalInfo.email || "snowflake@email.com"}
          </p>
          <p>
            <strong>Phone Number:</strong> {generalInfo.phone || "123-456-7890"}
          </p>
          <p>
            <strong>Address:</strong> {generalInfo.address || "Chicago, IL"}
          </p>
          <div className="btn-container">
            <button onClick={handleEdit}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
}
