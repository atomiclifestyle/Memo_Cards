import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Flashcard from "./Flashcard";

function App() {
  const [notes, setNotes] = useState([]);
  const [mode, setMode] = useState("notes");
  const [filter, setFilter] = useState("");

  function onAdd(title, content, tags, category) {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: Date.now(),
        title: title,
        content: content,
        tags: tags.split(",").map((tag) => tag.trim()),
        category: category,
      },
    ]);
  }

  function onDlt(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  const filteredNotes = notes.filter(
    (note) =>
      !filter ||
      note.tags.includes(filter) ||
      note.category.toLowerCase() === filter.toLowerCase()
  );

  return (
    <div>
      <Header />

      <div className="button-container">
        <button className="toggle-btn" onClick={() => setMode("notes")}>
          Notes Mode
        </button>
        <button className="toggle-btn" onClick={() => setMode("flashcards")}>
          Flashcard Mode
        </button>
      </div>

      <div className="button-container">
        <button className="filter-btn" onClick={() => setFilter("")}>
          All
        </button>
        {Array.from(new Set(notes.flatMap((note) => note.tags))).map((tag) => (
          <button
            className="filter-btn"
            key={tag}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
        {Array.from(new Set(notes.map((note) => note.category))).map(
          (category) => (
            <button
              className="filter-btn"
              key={category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          )
        )}
      </div>

      {mode === "notes" ? (
        <>
          <CreateArea onAddFun={onAdd} />
          {filteredNotes.map((note, index) => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              tags={note.tags}
              category={note.category}
              onDltFun={onDlt}
            />
          ))}
        </>
      ) : (
        <div>
          {filteredNotes.map((note, index) => (
            <Flashcard
              key={note.id}
              question={note.title}
              answer={note.content}
            />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
