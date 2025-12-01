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

export default function Education() {
  const [showForm, setShowForm] = useState(false);
  const formAdd = () => {
    setShowForm(true);
  };
  function EducationForm() {
    const [university, setUniversity] = useState("");
    const [location, setLocation] = useState("");
    const [course, setCourse] = useState("");
    const [grade, setGrade] = useState("");
    const [startMonth, setStartMonth] = useState("");
    const [startYear, setStartYear] = useState("");

    const [endMonth, setEndMonth] = useState("");
    const [endYear, setEndYear] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log({
        university,
        course,
        grade,
        startMonth,
        startYear,
        endMonth,
        endYear,
      });
      resetEducationForm();
    };

    const handleUniChange = (event) => {
      setUniversity(event.target.value);
    };

    const handleLocationChange = (event) => {
      setLocation(event.target.value);
    };

    const handleCourseChange = (event) => {
      setCourse(event.target.value);
    };
    const handleGradeChange = (event) => {
      setGrade(event.target.value);
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
    const resetEducationForm = () => {
      setUniversity("");
      setCourse("");
      setGrade("");
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
          id="university"
          value={university}
          placeholder="University/College Name"
          onChange={handleUniChange}
        />
        <input
          type="text"
          id="location"
          value={location}
          placeholder="Location"
          onChange={handleLocationChange}
        />
        <input
          type="text"
          id="course"
          value={course}
          placeholder="Course"
          onChange={handleCourseChange}
        />
        <input
          type="text"
          id="grade"
          value={grade}
          placeholder="Grade"
          onChange={handleGradeChange}
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
          Submit
        </button>
        <button type="reset" onClick={resetEducationForm}>
          Delete
        </button>
      </form>
    );
  }
  return (
    <>
      <h2>Education</h2>
      <div className="form">
        <button onClick={formAdd}>Add Education</button>
        {showForm ? <EducationForm /> : null}
      </div>
    </>
  );
}
