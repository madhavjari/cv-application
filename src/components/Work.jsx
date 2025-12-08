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

function WorkFormRender({ workData }) {
  return (
    <>
      {workData.map((form) => {
        return (
          <ul key={form.id}>
            <FormData details={form.details} />
          </ul>
        );
      })}
    </>
  );
}

function WorkForm({ setShowForm, onFormAdd }) {
  const [formData, setFormData] = useState({
    company: "",
    location: "",
    title: "",
    description: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onFormAdd(formData);
    resetWorkForm();
  };

  const resetWorkForm = () => {
    setShowForm(false);
    setFormData({
      company: "",
      location: "",
      title: "",
      description: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="company">
        <h3>Company* :</h3>
      </label>
      <input
        name="company"
        id="company"
        type="text"
        placeholder="Company Name"
        value={formData.company}
        onChange={handleChange}
        autocomplete="organization"
        required
      />
      <label htmlFor="location">
        <h3>Location* :</h3>
      </label>
      <input
        name="location"
        id="location"
        type="text"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
      />
      <label htmlFor="title">
        <h3>Job Title* :</h3>
      </label>
      <input
        name="title"
        id="title"
        type="text"
        placeholder="Job Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <label htmlFor="description">
        <h3>Description :</h3>
      </label>
      <input
        name="description"
        id="description"
        type="text"
        placeholder="Job Description"
        value={formData.description}
        onChange={handleChange}
      />
      <h3>Start Date:</h3>
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
      <h3>End Date:</h3>
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
      <button type="reset" onClick={resetWorkForm}>
        Reset and close
      </button>
    </form>
  );
}

export default function WorkExperience({ cvData, setCvData }) {
  const [showForm, setShowForm] = useState(false);
  const [nextId, setNextId] = useState(1);

  const addWorkForm = (form) => {
    setCvData((prevData) => ({
      ...prevData,
      work: [...prevData.work, { id: nextId, details: form }],
    }));
    setNextId(nextId + 1);
  };

  const formShow = () => {
    setShowForm(true);
  };

  return (
    <>
      <h2>Work Experience</h2>
      <div className="form"></div>
      <button onClick={formShow}>Add Work Experience</button>
      {cvData.work.length > 0 ? (
        <WorkFormRender workData={cvData.work} />
      ) : null}
      {showForm ? (
        <WorkForm setShowForm={setShowForm} onFormAdd={addWorkForm} />
      ) : null}
    </>
  );
}
