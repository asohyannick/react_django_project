import { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import Header from "../components/Header";
import AddButton from "../components/AddButton";
const url = 'http://127.0.0.1:8000/api/notes/';
const NotesListPage = () => {
  const [notes, setNotes] = useState([]);
  console.log(notes);
  useEffect(() => {
    getNotes();
  }, []);
  let getNotes = async () => {
    let response = await fetch(url);
    let data = await response.json();
    console.log("DATA", data);
    setNotes(data);
  };
  return (
    <div className="notes"> 
    <Header/>
    <div className="notes-header">
       <h2 className="notes-title">&#9782;</h2>
       <p className="notes-count">There are {notes.length} notes in our database.</p>
    </div>
    <div style={{
      textAlign:'center',
      fontSize:20,
      textTransform:'uppercase',
      fontFamily:'Roboto'
    }}>Create more notes..</div>
      <div className="notes-list">
        {notes.map((note, id) => (
          <ListItem note={note} key={id}/>
        ))}
      </div>
      <AddButton/>
    </div>
  );
};

export default NotesListPage;
