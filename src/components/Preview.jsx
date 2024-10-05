export default function Preview() {
  return (
    <div className="preview">
      <div className="gen-info-preview">
        <h1 className="name">Michael Scofield</h1>
        <div className="gen-info-details">
          {/*icon*/}
          <span className="email-preview">test@email.com</span>
          {/*icon*/}
          <span className="phone-preview">123-456-7890</span>
          {/*icon*/}
          <span className="address-preview">Chicago, IL</span>
        </div>
      </div>
      <div className="detail-preview">
        <h3>Education</h3>
        <div className="detail-container">
          <div className="left-detail">
            <p>Loyola University</p>
            <p>08/99 - 05/03</p>
          </div>
          <div className="right-detail">
            <p>B.S./M.S. in Civil Engineerring</p>
            <p>3.98/4.0 GPA</p>
          </div>
        </div>
      </div>
      <div className="detail-preview">
        <h3>Experience</h3>
        <div className="detail-container">
          <div className="left-detail">
            <p>Middleton, Maxwell and Schaum</p>
            <p>06/03 - 03/05</p>
          </div>
          <div className="right-detail">
            <p>Structural Engineer</p>
            <p>
              Applied creative and analytical problems solving skills to
              multiple advanced building systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
