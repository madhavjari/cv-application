function WorkRender({ workData }) {}

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
    </>
  );
}
