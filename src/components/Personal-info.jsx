import { useState } from "react";

export default function Personal({ cvData, setCvData }) {
  const personalData = cvData.personal;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCvData((prevData) => ({
      ...prevData,
      personal: { ...prevData.personal, [name]: value },
    }));
  };

  const resetForm = () => {
    setCvData((prev) => ({
      ...prev,
      personal: {
        name: "",
        email: "",
        phone: "",
        address: "",
        aboutMe: "",
      },
    }));
  };
  return (
    <>
      <h1>CV Builder</h1>
      <h2>Personal Details</h2>
      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="Full name"
          id="name"
          onChange={handleChange}
          value={personalData.name}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          value={personalData.email}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone"
          id="phone"
          value={personalData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          id="adrress"
          value={personalData.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="aboutMe"
          placeholder="About me"
          id="about-me"
          value={personalData.aboutMe}
          onChange={handleChange}
          required
        />
      </div>
      <button className="reset" onClick={resetForm}>
        Reset
      </button>
    </>
  );
}
