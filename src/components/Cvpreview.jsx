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

function ListRender({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <h3>
            <li key={item.id}>{item.detail}</li>
          </h3>
        );
      })}
    </ul>
  );
}

export default function CvPreview({ cvData }) {
  return (
    <>
      <div className="cv-header">
        <h1>{cvData.personal.name ? cvData.personal.name : "Your Name"}</h1>
        <h2>
          {cvData.personal.designation
            ? cvData.personal.designation
            : "Your Designation"}
        </h2>
        <h3>
          {cvData.personal.aboutMe
            ? cvData.personal.aboutMe
            : "Information about yourself/ what do you excel, what future holds for you,etc"}
        </h3>
      </div>
      <div className="cv-navbar">
        <h4>
          {cvData.personal.phone ? cvData.personal.phone : "xx-xxxxxxxxx"}
        </h4>
        <h4>
          {cvData.personal.email ? cvData.personal.email : "xxxxxxxxx@xxx.com"}
        </h4>
        <h4>
          {cvData.personal.currentCity ? cvData.personal.currentCity : ""}
        </h4>
        {cvData.personal.gender ? <h4>{cvData.personal.gender}</h4> : null}
      </div>
      <article>
        <div className="education">
          <h2>Education</h2>
          <div className="line"></div>
          <EducationRender educationData={cvData.education} />
        </div>
        <div className="work">
          <h2>Work Experience</h2>
          <div className="line"></div>
          <WorkRender workData={cvData.work} />
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <div className="line"></div>
          <h3>Technical Skills</h3>
          <ListRender items={cvData.techSkills} />
          <h3>Soft Skills</h3>
          <ListRender items={cvData.softSkills} />
        </div>

        <div className="languages">
          <h2>Languages</h2>
          <div className="line"></div>
          <ListRender items={cvData.languages} />
        </div>
        <div className="personal-address">
          <h2>Address for communication</h2>
          <div className="line"></div>
          <h3>{cvData.personal.address}</h3>
        </div>
      </article>
    </>
  );
}
