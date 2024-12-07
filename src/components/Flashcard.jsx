import React, { useState } from "react";

function Flashcard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      className={`flashcard ${showAnswer ? "flipped" : ""}`}
      onClick={() => setShowAnswer(!showAnswer)}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <h3>{question}</h3>
        </div>
        <div className="flashcard-back">
          <h3>{answer}</h3>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
