import noteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  //GET ALL NOTE
  const getNotes = async () => {
    //API CALL

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log("All Notes", json);
    setNotes(json);
  };
  //ADD A NOTE
  const addNote = async (title, description, tag) => {
    //TODO API CALL
    //API
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjJmZGQyY2NhZmYyZDkyZTI3Yjg2ZCIsImlhdCI6MTY1NTg5NzYxNH0.GJ3zSZ42DdDZ_zMDYRZvlMXwMcPv_BfaU8v4leMTHqo",
        body: JSON.stringify({ title, description, tag }),
      });
      console.log("add note response", response);
      const note = await response.json();
      console.log("add note api", note);

      setNotes(notes.concat([note]));
      console.log("Notes", notes);
    } catch (e) {
      console.log("add note error", e);
    }

    //API CALL
  };
  //DELETE A NOTE
  const deleteNote = async (id, title, description, tag) => {
    // API CALL

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //EDIT A NOTE
  const editNote = async (id, title, description, tag) => {
    //API CALL

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    //LOGIC TO EDIT IN CLIENT
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index] = title;
        newNotes[index] = description;
        newNotes[index] = tag;
        break;
      }
    }
    setNotes(newNotes);
    console.log(newNotes);
  };
  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
