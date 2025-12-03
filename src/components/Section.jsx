import Personal from "./Personal-info";
import Education from "./Education";
import WorkExperience from "./Work";
import Skills from "./Skills";
import Language from "./Language";
import "../style/section.css";
import { useState } from "react";
import CvPreview from "./Cvpreview";

export default function Section() {
  const [cvData, setCvData] = useState({
    personal: {},
  });
  return (
    <>
      <Personal cvData={cvData} setCvData={setCvData} />
      <Education />
      <WorkExperience />
      <Skills />
      <Language />
      <CvPreview cvData={cvData} />
    </>
  );
}
