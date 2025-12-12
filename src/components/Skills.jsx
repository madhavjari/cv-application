import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function TechSkillRender({ skills, setCvData }) {
  const updateItem = (form) => {
    setCvData((prev) => ({
      ...prev,
      techSkills: prev.techSkills.map((item) =>
        item.id === form.id ? form : item
      ),
    }));
  };

  const deleteItem = (id) => {
    setCvData((prevData) => ({
      ...prevData,
      techSkills: prevData.techSkills.filter((item) => item.id !== id),
    }));
  };
  return (
    <>
      {skills.map((form) => {
        return (
          <SkillItem
            key={form.id}
            form={form}
            onDelete={deleteItem}
            onUpdate={updateItem}
          />
        );
      })}
    </>
  );
}

function SoftSkillRender({ skills, setCvData }) {
  const updateItem = (form) => {
    setCvData((prev) => ({
      ...prev,
      softSkills: prev.softSkills.map((item) =>
        item.id === form.id ? form : item
      ),
    }));
  };

  const deleteItem = (id) => {
    setCvData((prevData) => ({
      ...prevData,
      softSkills: prevData.softSkills.filter((item) => item.id !== id),
    }));
  };
  return (
    <>
      {skills.map((form) => {
        return (
          <SkillItem
            key={form.id}
            form={form}
            onDelete={deleteItem}
            onUpdate={updateItem}
          />
        );
      })}
    </>
  );
}

function SkillItem({ form, onDelete, onUpdate }) {
  const [editedForm, setEditedForm] = useState(form);
  const [edit, setEdit] = useState(false);
  const handleChange = (event) => {
    const value = event.target.value;
    setEditedForm((prevData) => ({
      ...prevData,
      detail: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editedForm.detail.trim() !== "") {
      onUpdate(editedForm);
      setEdit(false);
    }
  };
  return (
    <>
      <div className="content-render">
        <h3>{form.detail}</h3>
        <div>
          <EditIcon
            className="change-button"
            aria-label="edit"
            onClick={() => {
              setEdit(true);
            }}
          />
          <DeleteIcon
            className="change-button"
            aria-label="delete"
            onClick={() => onDelete(form.id)}
          />
        </div>
      </div>
      {edit ? (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="techSkill"
              placeholder="Add a skill"
              value={editedForm.detail}
              onChange={handleChange}
            />
            <button type="submit">Save</button>
            <button
              type="button"
              onClick={() => {
                setEditedForm(form);
                setEdit(false);
              }}
            >
              Cancel
            </button>
          </form>
        </>
      ) : null}
    </>
  );
}

function SkillForm({ onSkillChange }) {
  const [skill, setSkill] = useState("");
  const handleChange = (event) => {
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
        onChange={handleChange}
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
      techSkills: [...prevData.techSkills, { id: techNextId, detail: skill }],
    }));
    setTechNextId(techNextId + 1);
    setShowFormTech(false);
  };

  const addSoftSkill = (skill) => {
    setCvData((prevData) => ({
      ...prevData,
      softSkills: [...prevData.softSkills, { id: softNextId, detail: skill }],
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
        <TechSkillRender skills={cvData.techSkills} setCvData={setCvData} />
      ) : null}
      {showFormTech ? <SkillForm onSkillChange={addTechSkill} /> : null}
      <h3>Soft Skills</h3>
      <button onClick={changeShowFormSoft}>Add Skill</button>
      {cvData.softSkills.length !== 0 ? (
        <SoftSkillRender skills={cvData.softSkills} setCvData={setCvData} />
      ) : null}
      {showFormSoft ? <SkillForm onSkillChange={addSoftSkill} /> : null}
    </>
  );
}
