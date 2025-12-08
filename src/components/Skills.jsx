import { useState } from "react";

function SkillList({ skills }) {
  return (
    <>
      {skills.map((skill) => {
        return <li key={skill.id}>{skill}</li>;
      })}
    </>
  );
}

function SkillForm({ onSkillChange }) {
  const [skill, setSkill] = useState("");
  const handleSkillChange = (event) => {
    setSkill(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (skill.trim() !== "") {
      onSkillChange(skill);
      setSkill("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="skill"
        placeholder="Add a skill"
        value={skill}
        onChange={handleSkillChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default function Skills({ cvData, setCvData }) {
  const [showFormTech, setShowFormTech] = useState(false);
  const [showFormSoft, setShowFormSoft] = useState(false);
  const changeShowFormTech = () => {
    setShowFormTech(true);
  };

  const changeShowFormSoft = () => {
    setShowFormSoft(true);
  };

  const [techNextId, setTechNextId] = useState(1);
  const [softNextId, setSoftNextId] = useState(1);

  const addTechSkill = (skill) => {
    setCvData((prevData) => ({
      ...prevData,
      techSkills: [...prevData.techSkills, skill],
    }));
    setTechNextId(techNextId + 1);
    setShowFormTech(false);
  };

  const addSoftSkill = (skill) => {
    setCvData((prevData) => ({
      ...prevData,
      softSkills: [...prevData.softSkills, skill],
    }));
    setSoftNextId(softNextId + 1);
    setShowFormSoft(false);
  };
  return (
    <>
      <h2>Skills</h2>
      <h3>Technical Skills:</h3>
      <button onClick={changeShowFormTech}>Add Skill</button>
      {cvData.techSkills.length !== 0 ? (
        <SkillList skills={cvData.techSkills} />
      ) : null}
      {showFormTech ? <SkillForm onSkillChange={addTechSkill} /> : null}
      <h3>Soft Skills</h3>
      <button onClick={changeShowFormSoft}>Add Skill</button>
      {cvData.softSkills.length !== 0 ? (
        <SkillList skills={cvData.softSkills} />
      ) : null}
      {showFormSoft ? <SkillForm onSkillChange={addSoftSkill} /> : null}
    </>
  );
}
