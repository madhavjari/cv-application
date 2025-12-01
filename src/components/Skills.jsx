import { useState } from "react";

export default function Skills() {
  const [showFormTech, setShowFormTech] = useState(false);
  const [showFormSoft, setShowFormSoft] = useState(false);
  const changeShowFormTech = () => {
    setShowFormTech(true);
  };

  const changeShowFormSoft = () => {
    setShowFormSoft(true);
  };

  function SkillForm() {
    const [skill, setSkill] = useState("");
    const handleSkillChange = (event) => {
      setSkill(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      setSkill("");
    };
    return (
      <form>
        <input
          type="text"
          id="skill"
          placeholder="Add a skill"
          value={skill}
          onChange={handleSkillChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
    );
  }
  return (
    <>
      <h2>Skills</h2>
      <h3>Technical Skills:</h3>
      <button onClick={changeShowFormTech}>Add Skill</button>
      {showFormTech ? <SkillForm /> : null}
      <h3>Soft Skills</h3>
      <button onClick={changeShowFormSoft}>Add Skill</button>
      {showFormSoft ? <SkillForm /> : null}
    </>
  );
}
