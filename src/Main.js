import React, { useState } from "react";
import Header from "./Components/Header";
import CreateNote from "./Components/CreateNote";
import MyNote from "./Components/MyNote";
import Footer from "./Components/Footer";
import "./Components/Style.css";

const Main = () => {
  const [myNotes, setMyNotes] = useState([]);

  const addNote = (note) => {
    setMyNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };
  const deleteNote = (id) => {
    setMyNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <div className="main_container">
      <div id="list" class="section">
      {myNotes.map((item, index) => {
        return (
          <MyNote key={index} id={index} notes={item} deleteNote={deleteNote} />
        );
      })}
      </div>
      </div>
      <br />
      <br />
      <br />
   
      <Footer />
    </>
  );
};

export default Main;
