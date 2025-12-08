function WorkRender({ workData }) {
  return (
    <>
      {workData.map((form) => {
        return (
          <div className="work-render">
            <h3>{form.details.title}</h3>
            <div className="company-details">
              <h3>
                <i>{form.details.company + " - " + form.details.location}</i>
              </h3>
              <h3 className="year">
                {(form.details.startMonth
                  ? form.details.startMonth + " / "
                  : "") +
                  form.details.startYear +
                  " - " +
                  (form.details.endYear === "Present"
                    ? form.details.endYear
                    : (form.details.endMonth
                        ? form.details.endMonth + " / "
                        : "") + form.details.endYear)}
              </h3>
            </div>
            <h3 className="work-desc">
              {form.details.description ? form.details.description : ""}
            </h3>
          </div>
        );
      })}
    </>
  );
}

function EducationRender({ educationData }) {
  return (
    <>
      {educationData.map((form) => {
        return (
          <div className="education-render">
            <h3>{form.details.course}</h3>
            <div className="university-details">
              <h3>
                <i>{form.details.university + " - " + form.details.location}</i>
              </h3>
              <h3 className="year">
                {(form.details.startMonth
                  ? form.details.startMonth + " / "
                  : "") +
                  form.details.startYear +
                  " - " +
                  (form.details.endYear === "Present"
                    ? form.details.endYear
                    : (form.details.endMonth
                        ? form.details.endMonth + " / "
                        : "") + form.details.endYear)}
              </h3>
            </div>
            <h3 className="grade">
              {form.details.grade ? "Grade: " + form.details.grade : ""}
            </h3>
          </div>
        );
      })}
    </>
  );
}

export default function CvPreview({ cvData }) {
  return (
    <>
      <div className="cv-header">
        <h1 className="name">
          {cvData.personal.name ? cvData.personal.name : "Your Name"}
        </h1>
        <h2 className="designation">
          {cvData.personal.designation
            ? cvData.personal.designation
            : "Your Designation"}
        </h2>
        <h3 className="about-me">
          {cvData.personal.aboutMe
            ? cvData.personal.aboutMe
            : "Information about yourself/ what do you excel, what future holds for you,etc"}
        </h3>
      </div>
      <div className="cv-navbar">
        <h4 className="phone">
          {cvData.personal.phone ? cvData.personal.phone : "xx-xxxxxxxxx"}
        </h4>
        <h4 className="email">
          {cvData.personal.email ? cvData.personal.email : "xxxxxxxxx@xxx.com"}
        </h4>
        <h4 className="city">
          {cvData.personal.currentCity ? cvData.personal.currentCity : ""}
        </h4>
      </div>
      <div className="work">
        <h2>Work Experience</h2>
        <WorkRender workData={cvData.work} />
      </div>
      <div className="education">
        <h2>Education</h2>
        <EducationRender educationData={cvData.education} />
      </div>
    </>
  );
}
