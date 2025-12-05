import Personal from "./components/Personal-info";
import Education from "./components/Education";
import WorkExperience from "./components/Work";
import Skills from "./components/Skills";
import Language from "./components/Language";
import { useState } from "react";
import CvPreview from "./components/Cvpreview";
import "./style/personal.css";
import "./App.css";

export default function App() {
  const [cvData, setCvData] = useState({
    personal: {},
    work: [],
  });
  const sectionStyle = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <section style={sectionStyle}>
      <div className="input">
        <h1>Input</h1>
        <div className="input-forms">
          <Personal cvData={cvData} setCvData={setCvData} />
          <Education />
          <WorkExperience cvData={cvData} setCvData={setCvData} />
          <Skills />
          <Language />
        </div>
      </div>
      <div className="output">
        <h1>Preview</h1>
        <div className="preview">
          <CvPreview cvData={cvData} />
        </div>
      </div>
    </section>
  );
}
