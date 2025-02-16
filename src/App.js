import React, { useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
    setName("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" value={name} onChange={handleChange} required />
         <button type="submit">Submit</button>
      </form>
      {submittedName && <p>Submitted Name: {submittedName}</p>}
    </div>
  );
};

export default ControlledForm;
