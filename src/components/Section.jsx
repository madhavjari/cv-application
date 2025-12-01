import Personal from "./Personal-info";
import Education from "./Education";
import WorkExperience from "./Work";
import "../style/section.css";

export default function Section() {
  return (
    <>
      <Personal />
      <Education />
      <WorkExperience />
    </>
  );
}
