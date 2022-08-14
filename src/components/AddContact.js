import React from "react";
import { useContext, useState } from "react";
import contactContext from "../context/contact/contactContext";
const AddContact = (props) => {
  const context = useContext(contactContext);
  const { contacts } = context;
  const [contact, setNote] = useState({
    name: "",
    email: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    console.log("contact", contact);
    contacts(contacts.name, contact.email);
    setNote({ name: "", email: "" });
    props.showAlert("contact Added", "success");
  };
  const onChange = (e) => {
    setNote({ ...contact, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container my-3">
        {/* <h2>Add a Contact</h2> */}
        {/* <form className="my-3">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="emailHelp"
              onChange={onChange}
              minLength={2}
              required
              value={contact.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              e-mail
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              onChange={onChange}
              minLength={2}
              required
              value={contact.email}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add A Contact
          </button>
        </form> */}
      </div>
    </>
  );
};

export default AddContact;
