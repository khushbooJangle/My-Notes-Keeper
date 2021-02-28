import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Style.css";

const MyNote = (props) => {
  const deleteNoteHandler = (id) => {
    props.deleteNote(id);
  };

  return (
    <>
      <div className="card-block" id="item">
        <h3 class="card-title">{props.notes.title}</h3>
        <p class="card-text">{props.notes.detail}</p>
        <button class="delete_button" onClick={() => deleteNoteHandler(props.id)}>
          <DeleteIcon style={{ color: "brown" }} />
        </button>
      </div>
    </>
  );
};

export default MyNote;
