import React, { useState } from "react";
import { Input, TextareaAutosize } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "./Style.css";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [notes, setNotes] = useState({
    title: "",
    detail: "",
  });
  const inputNoteHandler = (event) => {
    const { name, value } = event.target;
    setNotes((prevItem) => {
      return { ...prevItem, [name]: value };
    });
  };

  const addNotesHandler = (event) => {
    event.preventDefault();
    props.passNote(notes);
    setNotes({
      title: "",
      detail: "",
    });
  };
  const expandHandler = () => {
    setExpand(true);
  };
  const deExpandHandler = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="content_wrapper">
        <form className="form">
          <input
            className="note_title"
            name="title"
            value={notes.title}
            placeholder="Enter title"
            onChange={inputNoteHandler}
            autoComplete="off"
            onClick={expandHandler}
            onDoubleClick={deExpandHandler}
          />
          <br />
          {expand ? (
            <>
              {" "}
              <textarea
                className="note_detail"
                aria-label="minimum height"
                rowsMin={3}
                name="detail"
                value={notes.detail}
                cols="30"
                rows="1"
                placeholder="Take a note..."
                onChange={inputNoteHandler}
              />
              <br />
              <button onClick={addNotesHandler} class="add_button">
                <AddCircleIcon fontSize="large" style={{ color: "brown" }} />
              </button>
            </>
          ) : (
            ""
          )}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
