import { useState } from "react";

function LanguageList({ languages }) {
  return (
    <>
      {languages.map((language) => {
        return <li key={language.id}>{language}</li>;
      })}
    </>
  );
}

export default function Language({ cvData, setCvData }) {
  const [showForm, setShowForm] = useState(false);
  const [nextId, setNextId] = useState(1);

  const handleLanguageChange = (language) => {
    setCvData((prevData) => ({
      ...prevData,
      languages: [...prevData.languages, language],
    }));
    setNextId(nextId + 1);
    setShowForm(false);
  };

  const showFormChange = () => {
    setShowForm(true);
  };

  return (
    <>
      <h2>Language</h2>
      <button onClick={showFormChange}>Add a Language</button>
      {cvData.languages.length !== 0 ? (
        <LanguageList languages={cvData.languages} />
      ) : null}
      {showForm ? <LanguageForm onAddLanguage={handleLanguageChange} /> : null}
    </>
  );
}

function LanguageForm({ onAddLanguage }) {
  const [language, setLanguage] = useState("");
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (language.trim() !== "") {
      onAddLanguage(language);
      setLanguage("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="language"
          placeholder="Add a language"
          value={language}
          onChange={handleLanguageChange}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
