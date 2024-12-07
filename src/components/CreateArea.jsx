import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [titleText, setTitleText] = useState("");
  const [contentText, setContentText] = useState("");
  const [tagText, setTagText] = useState("");
  const [categoryText, setCategoryText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleAddNote() {
    if (titleText === "" || contentText === "") {
      setErrorMessage("Title and Content are required.");
    } else {
      setErrorMessage(""); // Clear the error
      props.onAddFun(titleText, contentText, tagText, categoryText);
      setTitleText("");
      setContentText("");
      setTagText("");
      setCategoryText("");
    }
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          name="title"
          placeholder="Title"
          onChange={(event) => {
            setTitleText(event.target.value);
          }}
          value={titleText}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={(event) => {
            setContentText(event.target.value);
          }}
          value={contentText}
        />
        <input
          name="tag"
          placeholder="Tag (Optional)"
          onChange={(event) => {
            setTagText(event.target.value);
          }}
          value={tagText}
        />
        <input
          name="category"
          placeholder="Category (Optional)"
          onChange={(event) => {
            setCategoryText(event.target.value);
          }}
          value={categoryText}
        />

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        <button className="addbutton" onClick={handleAddNote}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
