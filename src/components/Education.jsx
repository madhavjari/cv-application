import { useState } from "react";

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
    const [year, setYear] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log({ university, course, grade, year });
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
    const handleYearChange = (event) => {
      setYear(event.target.value);
    };

    const resetEducationForm = () => {
      setUniversity("");
      setCourse("");
      setGrade("");
      setYear("");
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
        <input
          type="number"
          id="year"
          value={year}
          placeholder="Pass-out Year"
          onChange={handleYearChange}
        />
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
