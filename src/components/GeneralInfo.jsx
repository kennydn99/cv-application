import { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import "../styles/Section.css";

export default function GeneralInfoSection({ generalInfo, setGeneralInfo }) {
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
    </div>
  );
}
