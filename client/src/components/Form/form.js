import React, { useState } from "react";
import "./form.css";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [breed, setbreed] = useState("");
  const [birthday, setbirthday] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    return name === "firstName" ? setFirstName(value) : setbreed(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  // alert(`Hello ${firstName} ${lastName}`);
  // setFirstName("");
  // setLastName("");

  return (
    <div>
      <p>Hello {firstName}</p>
      <form className="form">
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={breed}
          name="breed"
          onChange={handleInputChange}
          type="text"
          placeholder="Breed"
        />

        <input
          value={birthday}
          name="birthday"
          onChange={handleInputChange}
          type="text"
          placeholder="birthday"
        />

        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form;
