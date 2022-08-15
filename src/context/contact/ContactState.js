import contactContext from "./contactContext";
import { useState } from "react";
import { BACKEND_URI } from "../../../const";
const contactState = (props) => {
  const host = BACKEND_URI;
  const contactssInitial = [];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [contacts, setContacts] = useState(contactssInitial);
  //GET ALL contacts
  const getcontacts = async () => {
    //API CALL

    const response = await fetch(`${host}/api/contact/fetchallcontacts`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log("All contacts", json);
    setContacts(json);
  };
  //ADD  contacts
  const addcontacts = async (name, email) => {
    //TODO API CALL
    //API
    try {
      const response = await fetch(`${host}/api/contact/addcontacts`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjJmZGQyY2NhZmYyZDkyZTI3Yjg2ZCIsImlhdCI6MTY1NTg5NzYxNH0.GJ3zSZ42DdDZ_zMDYRZvlMXwMcPv_BfaU8v4leMTHqo",
        body: JSON.stringify({ name, email }),
      });
      console.log("add contacts ", response);
      const contact = await response.json();
      console.log("add contacts api", contact);

      setContacts(contacts.concat([contact]));
      console.log("contacts", contacts);
    } catch (e) {
      console.log("add contacts error", e);
    }

    //API CALL
  };

  return (
    <contactContext.Provider value={{ contacts, addcontacts, getcontacts }}>
      {props.children}
    </contactContext.Provider>
  );
};

export default contactState;
