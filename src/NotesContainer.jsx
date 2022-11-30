import React from "react";
import Notes from "./Notes";



const NotesContainer = (props) => {
  const OnDelete=(id)=>{
    props.deleteNotePro(id);
  
  }
  return (
    <>
      <div className="container mb-5">
        <div className="row g-4 justify-content-center justify-content-md-start my-4">
          {props.newNote.map((ele,index)=>{
            return(
              <Notes 
                key={index}
                id={index}
                title={ele.title}
                content={ele.content}
                delete={OnDelete}
              />
              
            )
          })}
        </div>
      </div>
    </>
  );
};

export default NotesContainer;
