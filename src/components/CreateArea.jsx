import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    props.onAdd(newNote);
    setNewNote({
      title: "",
      content: "",
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNewNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function handleNewSate() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={newNote.title}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          onChange={handleChange}
          value={newNote.content}
          onClick={handleNewSate}
        />
        <Zoom in={isExpanded}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
