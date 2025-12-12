import "../style/personal.css";

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
        gender: "",
        address: "",
        currentCity: "",
        designation: "",
        aboutMe: "",
      },
    }));
  };
  return (
    <>
      <h1>CV Builder</h1>
      <h2>Personal Details</h2>
      <div className="form">
        <label htmlFor="name">
          <h3>Full Name* :</h3>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Full name"
          id="name"
          onChange={handleChange}
          value={personalData.name || ""}
          required
        />
        <label htmlFor="email">
          <h3>Email* :</h3>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          value={personalData.email || ""}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone">
          <h3>Phone Number :</h3>
        </label>
        <input
          type="number"
          name="phone"
          placeholder="Phone"
          id="phone"
          value={personalData.phone || ""}
          onChange={handleChange}
        />
        <label htmlFor="gender">Gender* :</label>
        <select
          name="gender"
          id="gender"
          onChange={handleChange}
          value={personalData.gender}
          required
        >
          <option value=""></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Prefet not to respond">Prefer not to respond</option>
        </select>
        <label htmlFor="address">
          <h3>Address :</h3>
        </label>
        <input
          type="text"
          name="address"
          placeholder="Address"
          id="address"
          value={personalData.address || ""}
          onChange={handleChange}
        />
        <label htmlFor="current-city">
          <h3>Current City* :</h3>
        </label>
        <input
          type="text"
          name="currentCity"
          placeholder="Current City"
          id="current-city"
          value={personalData.currentCity || ""}
          onChange={handleChange}
          required
        />
        <label htmlFor="designation">
          <h3>Designation:</h3>
        </label>
        <input
          type="text"
          name="designation"
          placeholder="Designation"
          id="designation"
          value={personalData.designation || ""}
          onChange={handleChange}
          required
        />
        <label htmlFor="aboutMe">
          <h3>About me:</h3>
        </label>
        <input
          type="text"
          name="aboutMe"
          placeholder="About me"
          id="about-me"
          value={personalData.aboutMe || ""}
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
