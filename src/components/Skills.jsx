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

  function SkillFormTech() {
    const [skill, setSkill] = useState("");
    const handleSkillChange = (event) => {
      setSkill(event.target.value);
    };

    const resetForm = () => {
      setSkill("");
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(skill);
      setShowFormTech(false);
      resetForm();
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

  function SkillFormSoft() {
    const [skill, setSkill] = useState("");
    const handleSkillChange = (event) => {
      setSkill(event.target.value);
    };

    const resetForm = () => {
      setSkill("");
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(skill);
      setShowFormSoft(false);
      resetForm();
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
      {showFormTech ? <SkillFormTech /> : null}
      <h3>Soft Skills</h3>
      <button onClick={changeShowFormSoft}>Add Skill</button>
      {showFormSoft ? <SkillFormSoft /> : null}
    </>
  );
}
