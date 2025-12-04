import Personal from "./components/Personal-info";
import Education from "./components/Education";
import WorkExperience from "./components/Work";
import Skills from "./components/Skills";
import Language from "./components/Language";
import { useState } from "react";
import CvPreview from "./components/Cvpreview";
import "./style/personal.css";

export default function App() {
  const [cvData, setCvData] = useState({
    personal: {},
  });
  const sectionStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20rem",
  };

  const inputStyle = {
    margin: "1rem",
    backgroundColor: "#f9fbfdff",
    display: "grid",
    gap: "1rem",
    padding: "3rem",
    borderRadius: "0.5rem",
    boxShadow: "0 0 1rem rgba(0, 0, 0, 0.3)",
  };
  return (
    <section style={sectionStyle}>
      <div className="input">
        <h1>Input</h1>
        <div className="input-forms" style={inputStyle}>
          <Personal cvData={cvData} setCvData={setCvData} />
          <Education />
          <WorkExperience />
          <Skills />
          <Language />
        </div>
      </div>
      <div className="output">
        <h1>Preview</h1>
        <CvPreview cvData={cvData} />
      </div>
    </section>
  );
}
