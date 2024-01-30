import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const NotePage = () => {
  const { id } = useParams();
  const [note, setNote] = React.useState([]);
  useEffect(() => {
    getNote();
  }, []);
  let getNote = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/`);
    let data = await response.json();
    console.log(data);
    setNote(data);
  };
  let createNote = async () => {
    await fetch(`http://127.0.0.1:8000/api/notes/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };
  let updateNote = async () => {
    await fetch(`http://127.0.0.1:8000/api/notes/${id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let deleteNote = async () => {
    await fetch(`http://127.0.0.1:8000/api/notes/${id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  let handleSubmit = () => {
    updateNote();
  };
  
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              onClick={handleSubmit}
            >
              <title>chevron-left</title>
              <path d="M11 16l13-13v-3l-16 16 16 16v-3l-13-13z"></path>
            </svg>
          </Link>
        </h3>
        <Link to='/' onClick={createNote}>
           create Note
        </Link>
        <button type="button" onClick={deleteNote}>
          Delete
        </button>
      </div>
      <textarea
        value={note?.body}
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
      ></textarea>
    </div>
  );
};

export default NotePage; 
