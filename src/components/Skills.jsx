import { useState } from "react";

function SkillForm({ onSkillChange }) {
  const [skill, setSkill] = useState("");
  const handleSkillChange = (event) => {
    setSkill(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSkillChange(skill);
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

export default function Skills() {
  const [showFormTech, setShowFormTech] = useState(false);
  const [showFormSoft, setShowFormSoft] = useState(false);
  const changeShowFormTech = () => {
    setShowFormTech(true);
  };

  const changeShowFormSoft = () => {
    setShowFormSoft(true);
  };
  function TechSkillList() {
    return (
      <>
        {techSkills.map((skill) => {
          return <li key={skill.id}>{skill.name}</li>;
        })}
      </>
    );
  }

  function TechSkillList() {
    return (
      <>
        {techSkills.map((skill) => {
          return <li key={skill.id}>{skill.name}</li>;
        })}
      </>
    );
  }
  function SoftSkillList() {
    return (
      <>
        {softSkills.map((skill) => {
          return <li key={skill.id}>{skill.name}</li>;
        })}
      </>
    );
  }
  const [techSkills, setTechSkills] = useState([]);
  const [techNextId, setTechNextId] = useState(1);
  const [softSkills, setSoftSkills] = useState([]);
  const [softNextId, setSoftNextId] = useState(1);

  const addTechSkill = (skill) => {
    setTechSkills((prevSkill) => [
      ...prevSkill,
      { id: techNextId, name: skill },
    ]);
    setTechNextId(techNextId + 1);
    setShowFormTech(false);
  };

  const addSoftSkill = (skill) => {
    setSoftSkills((prevSkill) => [
      ...prevSkill,
      { id: softNextId, name: skill },
    ]);
    setSoftNextId(softNextId + 1);
    setShowFormSoft(false);
  };

  return (
    <>
      <h2>Skills</h2>
      <h3>Technical Skills:</h3>
      <button onClick={changeShowFormTech}>Add Skill</button>
      {techSkills.length !== 0 ? <TechSkillList /> : null}
      {showFormTech ? <SkillForm onSkillChange={addTechSkill} /> : null}
      <h3>Soft Skills</h3>
      <button onClick={changeShowFormSoft}>Add Skill</button>
      {softSkills.length !== 0 ? <SoftSkillList /> : null}
      {showFormSoft ? <SkillForm onSkillChange={addSoftSkill} /> : null}
    </>
  );
}
