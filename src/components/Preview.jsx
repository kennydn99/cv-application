import "../styles/Preview.css";

// Helper function to format the date
const formatDateToMonthYear = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Add 1 to get the correct month
  const year = String(date.getFullYear()).slice(-2); // Get the last 2 digits of the year
  return `${month}/${year}`;
};

export default function Preview({ generalInfo, educationInfo }) {
  return (
    <div className="preview">
      <div className="gen-info-preview">
        <h1 className="name">{generalInfo.fullName || "Michael Scofield"}</h1>
        <div className="gen-info-details">
          {/*icon*/}
          <span className="email-preview">
            {generalInfo.email || "snowflake@email.com"}
          </span>
          {/*icon*/}
          <span className="phone-preview">
            {generalInfo.phone || "123-456-7890"}
          </span>
          {/*icon*/}
          <span className="address-preview">
            {generalInfo.address || "Chicago, IL"}
          </span>
        </div>
      </div>
      <div className="detail-preview-container">
        <div className="detail-preview">
          <h3>Education</h3>
          <div className="detail-container">
            <div className="left-detail">
              <p>{educationInfo.schoolName || "Loyola University"}</p>
              <p>
                {formatDateToMonthYear(educationInfo.studyFromDate) || "08/99"}{" "}
                -{formatDateToMonthYear(educationInfo.studyToDate) || "05/03"}
              </p>
            </div>
            <div className="right-detail">
              <p>
                {educationInfo.studyTitle || "B.S./M.S. in Civil Engineering"}
              </p>
              <p>{educationInfo.gpa || "3.98"}/4.0 GPA</p>
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
    </div>
  );
}
