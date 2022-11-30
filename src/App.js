// import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNode";
// import Notes from "./Notes";
import NotesContainer from "./NotesContainer";
import "./App.css";

function App() {
  const [insertNode, setInsertNode] = useState([]);

  const addNotes = (note) => {
    if (
      Object.keys(note.title).length !== 0 &&
      Object.keys(note.content).length !== 0
    ) {
      // alert("hello");
      setInsertNode((preval) => {
        return [...preval, note];
      });
     
    }
    // console.log(insertNode);
  };

  // const deleteNote=(preval,id)=>preval.filter((ele,index)=>{
  //   return index !==id;
  // })

  // ((preval,id)=>preval.filter((elem,index)=>{
  //   return index !== id;
  // }))
  // const sett=()

  const deleteNotePro=(id)=>{
    setInsertNode((preval)=>preval.filter((ele,index)=>{
      return index !== id;
    }))
  }

  return (
    <>
      <Header />
      <CreateNote passNote={addNotes} />
      <NotesContainer newNote={insertNode} deleteNotePro={deleteNotePro}/>
      <Footer />
    </>
  );
}
export default App;
