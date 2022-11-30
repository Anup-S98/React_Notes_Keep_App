import { DeleteForever } from "@mui/icons-material";
import React from "react";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import './App.css';

const Notes = (props) => {

  const deleteNote=()=>{
    props.delete(props.id);
  }
  return (
    <>
      <div className="col-md-3 px-4">
        <form
          className="d-flex flex-column justify-content-center form-style form-note"
          action=""
        >
          <input
            type="text"
            name=""
            id=""
            placeholder="Write Title..."
            value={props.title}
            readOnly
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Write Note..."
            value={props.content}
            readOnly
          ></textarea>
          <div className="btn-div position-relative ">
            <button type="button" className="btn btn-danger p-2 text-white" onClick={deleteNote}>
              <DeleteForever/>
            </button>
          </div>
        </form>
      </div>
    </>
  );
  // console.log(props);
};

export default Notes;
