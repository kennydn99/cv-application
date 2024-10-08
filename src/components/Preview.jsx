import "../styles/Preview.css";
import addressIcon from "../assets/address-icon.png";
import phoneIcon from "../assets/phone-icon.png";
import emailIcon from "../assets/email-icon.png";

// Helper function to format the date
const formatDateToMonthYear = (dateString) => {
  if (!dateString || isNaN(new Date(dateString))) return "";
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Add 1 to get the correct month
  const year = String(date.getFullYear()); // Get the last 2 digits of the year
  return `${month}/${year}`;
};

export default function Preview({
  generalInfo,
  educationInfo,
  experienceInfo,
}) {
  return (
    <div className="preview">
      <div className="gen-info-preview">
        <h1 className="name">{generalInfo.fullName || "Michael Scofield"}</h1>
        <div className="gen-info-details">
          <div className="gen-info-wrapper">
            <img src={emailIcon} alt="Address Icon" className="icon" />
            <span className="email-preview">
              {generalInfo.email || "snowflake@email.com"}
            </span>
          </div>
          <div className="gen-info-wrapper">
            <img src={phoneIcon} alt="Address Icon" className="icon" />
            <span className="phone-preview">
              {generalInfo.phone || "123-456-7890"}
            </span>
          </div>
          <div className="gen-info-wrapper">
            <img src={addressIcon} alt="Address Icon" className="icon" />
            <span className="address-preview">
              {generalInfo.address || "Chicago, IL"}
            </span>
          </div>
        </div>
      </div>
      {/* Education Section */}
      <div className="detail-preview-container">
        <div className="detail-preview">
          <h3>Education</h3>
          {educationInfo.length > 0 ? (
            educationInfo.map((education, index) => (
              <div className="detail-container" key={index}>
                <div className="left-detail">
                  <p>{education.schoolName}</p>
                  <p>
                    {formatDateToMonthYear(education.studyFromDate)} -{" "}
                    {formatDateToMonthYear(education.studyToDate)}
                  </p>
                </div>
                <div className="right-detail">
                  <p>{education.studyTitle}</p>
                  <p>{education.gpa}/4.0 GPA</p>
                </div>
              </div>
            ))
          ) : (
            <p>No education information available.</p>
          )}
        </div>
        {/* Experience Section */}
        <div className="detail-preview">
          <h3>Experience</h3>
          {experienceInfo.length > 0 ? (
            experienceInfo.map((experience, index) => (
              <div className="detail-container" key={index}>
                <div className="left-detail">
                  <p>{experience.company}</p>
                  <p>
                    {formatDateToMonthYear(experience.expFromDate)} -{" "}
                    {formatDateToMonthYear(experience.expToDate)}
                  </p>
                </div>
                <div className="right-detail">
                  <p>{experience.position}</p>
                  <p>{experience.responsibilities}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No experience information available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
