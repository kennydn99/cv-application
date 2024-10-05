import ButtonContainer from "./ButtonContainer";
import "../styles/Section.css";

export default function GeneralInfoSection() {
  return (
    <div className="section">
      <h1>General Info</h1>
      <div className="field">
        <label htmlFor="full-name">Full Name: </label>
        <input type="text" id="full-name" />
      </div>
      <div className="field">
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone Number: </label>
        <input type="tel" id="phone" />
      </div>
      <div className="field">
        <label htmlFor="address">Address: </label>
        <input type="text" id="address" />
      </div>
      <ButtonContainer></ButtonContainer>
    </div>
  );
}
