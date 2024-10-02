import "../styles/Section.css";
export default function Section({ heading }) {
  return (
    <div className="section">
      <h1>{heading}</h1>
      <div className="names-field">
        <label htmlFor="first-name">First Name: </label>
        <input type="text" id="first-name" />
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
    </div>
  );
}
