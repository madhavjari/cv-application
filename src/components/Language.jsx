import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function LanguageRender({ languages, setCvData }) {
  const updateItem = (form) => {
    setCvData((prev) => ({
      ...prev,
      languages: prev.languages.map((item) =>
        item.id === form.id ? form : item
      ),
    }));
  };

  const deleteItem = (id) => {
    setCvData((prevData) => ({
      ...prevData,
      languages: prevData.languages.filter((item) => item.id !== id),
    }));
  };
  return (
    <>
      {languages.map((form) => {
        return (
          <LanguageItem
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

function LanguageItem({ form, onDelete, onUpdate }) {
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
    onUpdate(editedForm);
    setEdit(false);
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
              id="language"
              placeholder="Add a language"
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

export default function Language({ cvData, setCvData }) {
  const [showForm, setShowForm] = useState(false);
  const [nextId, setNextId] = useState(1);

  const handleChange = (language) => {
    setCvData((prevData) => ({
      ...prevData,
      languages: [...prevData.languages, { id: nextId, detail: language }],
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
        <LanguageRender languages={cvData.languages} setCvData={setCvData} />
      ) : null}
      {showForm ? <LanguageForm onAddLanguage={handleChange} /> : null}
    </>
  );
}

function LanguageForm({ onAddLanguage }) {
  const [language, setLanguage] = useState("");
  const handleChange = (event) => {
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
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
