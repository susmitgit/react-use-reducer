import React, { useState, useRef, useReducer } from "react";
import Modal from "./Modal";

const Index = () => {
  const [name, setName] = useState("");
  const contactContainer = useRef(null);
  const [contacts, setContacts] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted", contactContainer.current.value, name);
    const contact = contactContainer.current.value;
    setContacts((prev) => {
      return [
        ...prev,
        { id: new Date().getTime().toString(), name, contact: contact }
      ];
    });
    contactContainer.current.value = "";
    setName("");
  };

  return (
    <>
      <Modal />
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <lable htmlFor="name"> Your Name </lable>
          <input
            type="text"
            value={name}
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <lable htmlFor="contact"> Contact </lable>
          <input type="text" ref={contactContainer} />
        </div>
        <button type="submit">ADD</button>
      </form>
      <div>
        {contacts.map((contact) => {
          return (
            <div key={contact.id}>
              <p>
                {contact.name}, {contact.contact}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Index;
