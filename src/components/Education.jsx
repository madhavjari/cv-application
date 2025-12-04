import { useState } from "react";

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

function FormData({ details }) {
  return (
    <>
      {Object.entries(details).map(([key, value]) => {
        return <li key={key}>{key + ": " + value}</li>;
      })}
    </>
  );
}

function EducationFormRender({ educationForm }) {
  return (
    <>
      {educationForm.map((form) => {
        return (
          <li key={form.id}>
            <FormData details={form.details} />
          </li>
        );
      })}
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
      <button type="submit">Add</button>
      <button type="reset" onClick={resetEducationForm}>
        Reset and close
      </button>
    </form>
  );
}

export default function Education() {
  const [showForm, setShowForm] = useState(false);
  const [educationForm, setEductionForm] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addEducationForm = (form) => {
    setEductionForm((prevForm) => [...prevForm, { id: nextId, details: form }]);
    setNextId(nextId + 1);
  };
  const formAdd = () => {
    setShowForm(true);
  };

  return (
    <>
      <h2>Education</h2>
      <div className="form">
        <button onClick={formAdd}>Add Education</button>
        {educationForm.length !== 0 ? (
          <EducationFormRender educationForm={educationForm} />
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
