import React, { useContext, useEffect, useRef, useState } from "react";
import ContactContext from "../context/contact/contactContext";

import { useNavigate } from "react-router-dom";
import ContactItem from "./ContactItem";
import AddContact from "./AddContact";

const Contacts = (props) => {
  const context = useContext(ContactContext);
  let navigate = useNavigate();
  const { contacts, getcontacts } = context;
  // console.log("contacts", contacts);
  const [Contacts, setContacts] = useState({
    name: "",
    email: "",
  });
  // const onChange = (e) => {
  //   setContacts({ ...Contacts, [e.target.name]: e.target.value });
  //};
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getcontacts();
    } else {
      navigate("/login");
    }
    console.log(useEffect);
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);

  return (
    <>
      <AddContact showAlert={props.showAlert} />

      <div className="my-2 text-center">
        <h2>Your Contacts</h2>

        {contacts.map((item) => {
          return <ContactItem contacts={item} />;
        })}
      </div>
    </>
  );
};

export default Contacts;
