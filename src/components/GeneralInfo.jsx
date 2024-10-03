import ButtonContainer from "./ButtonContainer";
import "../styles/Section.css";

export default function GeneralInfoSection() {
  return (
    <div className="section">
      <h1>General Info</h1>
      <div className="field">
        <label htmlFor="first-name">First Name: </label>
        <input type="text" id="first-name" />
      </div>
      <div className="field">
        <label htmlFor="first-name">Last Name: </label>
        <input type="text" id="last-name" />
      </div>
      <div className="field">
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone Number: </label>
        <input type="tel" id="phone" />
      </div>
      <ButtonContainer></ButtonContainer>
    </div>
  );
}
