import { useState } from "react";

export default function Personal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };
  return (
    <>
      <h1>CV Builder</h1>
      <h2>Personal Details</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Full name"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="number"
          placeholder="Phone"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
        />
        <input
          type="text"
          placeholder="Address"
          id="adrress"
          value={address}
          onChange={handleAddressChange}
        />
      </div>
      <button className="reset" onClick={resetForm}>
        Reset
      </button>
    </>
  );
}
