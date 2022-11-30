import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React, { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const ShowHideField = () => {
    setExpand(!expand);
  };

  const inputEvents = (e) => {
    const { name, value } = e.target;
    // console.log(name);
    setNote((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const InsertNodeData = (e) => {
    // e.preventdefault();
    // console.log(Object.keys(note).length)
    //
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div className="container">
        <div className="row my-4 justify-content-center">
          <div className="col-md-4 px-3">
            <form className="d-flex flex-column justify-content-center form-style">
              <input
                type="text"
                id=""
                placeholder="Write Title..."
                value={note.title}
                name="title"
                onDoubleClick={ShowHideField}
                onChange={inputEvents}
              />
              {expand ? (
                <>
                  <textarea
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Write Note..."
                    value={note.content}
                    name="content"
                    onChange={inputEvents}
                  ></textarea>
                  <div className="btn-div position-relative">
                    <button type="button" className="btn btn-light" onClick={InsertNodeData}>
                      <AddCircleOutlineIcon />
                    </button>
                  </div>
                </>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNote;
