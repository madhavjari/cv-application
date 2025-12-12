import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const months = [
  { value: "01", label: "January" },
  { value: "02", label: "Febrary" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const currentYear = new Date().getFullYear();
const startYear = currentYear - 70;
const years = [];

for (let i = currentYear; i >= startYear; i--) {
  if (i === currentYear) years.push("Present");
  years.push(i);
}

function EducationItem({ form, onDelete, onUpdate }) {
  const [editedForm, setEditedForm] = useState(form);
  const [edit, setEdit] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedForm((prevData) => ({
      ...prevData,
      details: {
        ...prevData.details,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(editedForm);
    setEdit(false);
  };
  return (
    <>
      <div className="content-render">
        <h3>University: {form.details.university}</h3>
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
            <EducationDetails
              formData={editedForm.details}
              handleChange={handleChange}
            />
            <button type="submit">Save</button>
            <button type="reset" onClick={() => setEdit(false)}>
              Cancel
            </button>
          </form>
        </>
      ) : null}
    </>
  );
}

function EducationFormRender({ educationForm, setCvData }) {
  const updateItem = (form) => {
    setCvData((prev) => ({
      ...prev,
      education: prev.education.map((item) =>
        item.id === form.id ? form : item
      ),
    }));
  };

  const deleteItem = (id) => {
    setCvData((prevData) => ({
      ...prevData,
      education: prevData.education.filter((item) => item.id !== id),
    }));
  };

  return (
    <>
      {educationForm.map((form) => {
        return (
          <EducationItem
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

function EducationDetails({ formData, handleChange }) {
  return (
    <>
      <label htmlFor="university">
        <h3>University/School* :</h3>
      </label>
      <input
        type="text"
        name="university"
        value={formData.university}
        placeholder="University/School Name"
        onChange={handleChange}
        required
      />
      <label htmlFor="location">
        <h3>Location</h3>
      </label>
      <input
        type="text"
        name="location"
        value={formData.location}
        placeholder="Location"
        onChange={handleChange}
      />
      <label htmlFor="course">
        <h3>Course* :</h3>
      </label>
      <input
        type="text"
        name="course"
        value={formData.course}
        placeholder="Course"
        onChange={handleChange}
        required
      />
      <label htmlFor="grade">
        <h3>Grade</h3>
      </label>
      <input
        type="text"
        name="grade"
        value={formData.grade}
        placeholder="Grade"
        onChange={handleChange}
      />
      <h3>Start Date :</h3>
      <label htmlFor="start-month"></label>
      <select
        name="startMonth"
        id="start-month"
        onChange={handleChange}
        value={formData.startMonth}
      >
        <option value="">--Select Month--</option>
        {months.map((m) => (
          <option key={m.value} value={m.value}>
            {m.label}
          </option>
        ))}
      </select>
      <label htmlFor="start-year"></label>
      <select
        name="startYear"
        id="start-year"
        onChange={handleChange}
        value={formData.startYear}
        required
      >
        <option value="">--Select Year--</option>
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
      <h3>End Date :</h3>
      <label htmlFor="end-month"></label>
      <select
        name="endMonth"
        id="end-month"
        onChange={handleChange}
        value={formData.endMonth}
      >
        <option value="">--Select Month--</option>
        {months.map((m) => (
          <option key={m.value} value={m.value}>
            {m.label}
          </option>
        ))}
      </select>
      <label htmlFor="end-year"></label>
      <select
        name="endYear"
        id="end-year"
        onChange={handleChange}
        value={formData.endYear}
        required
      >
        <option value="">--Select Year--</option>
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </>
  );
}

function EducationForm({ setShowForm, onFormAdd }) {
  const [formData, setFormData] = useState({
    university: "",
    location: "",
    course: "",
    grade: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormAdd(formData);
    resetEducationForm();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const resetEducationForm = () => {
    setFormData({
      university: "",
      location: "",
      course: "",
      grade: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
    });
    setShowForm(false);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <EducationDetails handleChange={handleChange} formData={formData} />
      <button type="submit">Add</button>
      <button type="reset" onClick={resetEducationForm}>
        Reset and close
      </button>
    </form>
  );
}

export default function Education({ cvData, setCvData }) {
  const [showForm, setShowForm] = useState(false);
  const [nextId, setNextId] = useState(1);

  const addEducationForm = (form) => {
    setCvData((prevData) => ({
      ...prevData,
      education: [...prevData.education, { id: nextId, details: form }],
    }));
    setNextId(nextId + 1);
  };
  const formAdd = () => {
    setShowForm(true);
  };

  return (
    <>
      <h2>Education</h2>
      <div className="form">
        <button onClick={formAdd} className="add-education">
          Add Education
        </button>
        {cvData.education.length !== 0 ? (
          <EducationFormRender
            educationForm={cvData.education}
            setCvData={setCvData}
          />
        ) : null}
        {showForm ? (
          <EducationForm
            setShowForm={setShowForm}
            onFormAdd={addEducationForm}
          />
        ) : null}
      </div>
    </>
  );
}
