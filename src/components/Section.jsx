import Personal from "./Personal-info";
import Education from "./Education";
import WorkExperience from "./Work";
import Skills from "./Skills";
import Language from "./Language";
import "../style/section.css";

export default function Section() {
  return (
    <>
      <Personal />
      <Education />
      <WorkExperience />
      <Skills />
      <Language />
    </>
  );
}
