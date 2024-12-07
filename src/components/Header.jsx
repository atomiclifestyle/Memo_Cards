import React from "react";
import NoteIcon from "@mui/icons-material/Note";

function Header() {
  const title = "Memo Cards";
  return (
    <header>
      {/* <h1>Note Maker</h1> */}
      <h1>
        {title.split("").map((char, index) => (
          <span
            key={index}
            className="letter"
            style={{
              display: "inline-block",
              transition: "transform 0.3s ease",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
      <div className="note-icon">
        <NoteIcon />
      </div>
    </header>
  );
}

export default Header;
