import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [newNote, setNewNote] = useState([]);

  function addNote(note) {
    setNewNote((preVal) => {
      return [...preVal, note];
    });
  }

  function deleteNote(id) {
    setNewNote((preVal) => {
      return preVal.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {newNote.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

// Map functionality

// {notes.map((note) => {
//   return (
//     <Note key={note.key} title={note.title} content={note.content} />
//   );
// })}
