import { useState } from "react";

export default function Language() {
  const [showForm, setShowForm] = useState(false);
  const showFormChange = () => {
    setShowForm(true);
  };

  function LanguageForm() {
    const [language, setLanguage] = useState("");
    const handleLanguageChange = (event) => {
      setLanguage(event.target.value);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(language);
      resetForm();
      setShowForm(false);
    };

    const resetForm = () => {
      setLanguage("");
    };
    return (
      <>
        <form action="submit">
          <input
            type="text"
            id="language"
            placeholder="Add a language"
            value={language}
            onChange={handleLanguageChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
        </form>
      </>
    );
  }
  return (
    <>
      <h2>Language</h2>
      <button onClick={showFormChange}>Add a Language</button>
      {showForm ? <LanguageForm /> : null}
    </>
  );
}
