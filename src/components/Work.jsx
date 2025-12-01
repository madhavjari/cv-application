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

for (let i = currentYear; i >= startYear; i--) years.push(i);

export default function WorkExperience() {
  const [showForm, setShowForm] = useState(false);
  const formAdd = () => {
    setShowForm(true);
  };

  function WorkForm() {
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [startMonth, setStartMonth] = useState("");
    const [startYear, setStartYear] = useState("");

    const [endMonth, setEndMonth] = useState("");
    const [endYear, setEndYear] = useState("");
    const handleCompanyChange = (event) => {
      setCompany(event.target.value);
    };
    const handleLocationChange = (event) => {
      setLocation(event.target.value);
    };

    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
    };

    const handleStartMonthChange = (event) => {
      setStartMonth(event.target.value);
    };

    const handleStartYearChange = (event) => {
      setStartYear(event.target.value);
    };

    const handleEndMonthChange = (event) => {
      setEndMonth(event.target.value);
    };

    const handleEndYearChange = (event) => {
      setEndYear(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log({
        company,
        location,
        title,
        description,
        startMonth,
        startYear,
        endMonth,
        endYear,
      });
      resetWorkForm();
    };

    const resetWorkForm = () => {
      setCompany("");
      setLocation("");
      setTitle("");
      setDescription("");
      setStartMonth("");
      setStartYear("");
      setEndMonth("");
      setEndYear("");
      setShowForm(false);
    };
    return (
      <form>
        <input
          type="text"
          placeholder="Company Name"
          id="company"
          onChange={handleCompanyChange}
        />
        <input
          type="text"
          placeholder="Location"
          id="location"
          onChange={handleLocationChange}
        />
        <input
          type="text"
          placeholder="Job Title"
          id="job-title"
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Job Description"
          id="job-description"
          onChange={handleDescriptionChange}
        />
        <h3>Start Date</h3>
        <select
          name=""
          id="start-month"
          onChange={handleStartMonthChange}
          value={startMonth}
        >
          <option value="">--Select Month--</option>
          {months.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>
        <select
          name=""
          id="start-year"
          onChange={handleStartYearChange}
          value={startYear}
        >
          <option value="">--Select Year--</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <h3>End Date</h3>
        <select
          name=""
          id="end-month"
          onChange={handleEndMonthChange}
          value={endMonth}
        >
          <option value="">--Select Month--</option>
          {months.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>

        <select
          name=""
          id="end-year"
          onChange={handleEndYearChange}
          value={endYear}
        >
          <option value="">--Select Year--</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
        <button type="reset" onClick={resetWorkForm}>
          Reset and close
        </button>
      </form>
    );
  }

  return (
    <>
      <h2>Work Experience</h2>
      <div className="form"></div>
      <button onClick={formAdd}>Add Work Experience</button>
      {showForm ? <WorkForm /> : null}
    </>
  );
}
