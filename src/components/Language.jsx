import { useState } from "react";

function LanguageList({ languages }) {
  return (
    <>
      {languages.map((language) => {
        return <li key={language.id}>{language.name}</li>;
      })}
    </>
  );
}

export default function Language() {
  const [showForm, setShowForm] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [nextId, setNextId] = useState(1);

  const handleLanguageChange = (language) => {
    setLanguages((prevLang) => [...prevLang, { id: nextId, name: language }]);
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
      {languages.length !== 0 ? <LanguageList languages={languages} /> : null}
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
