import { useState } from "react";

export default function Quiz({ question, options, correctAnswer }) {
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");

  const checkAnswer = () => {
    if (selected === correctAnswer) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Incorrect. Try again!");
    }
  };

  return (
    <div>
      <h3>{question}</h3>
      {options.map((option, index) => (
        <button key={index} onClick={() => setSelected(option)}>
          {option}
        </button>
      ))}
      <button onClick={checkAnswer}>Check Answer</button>
      <p>{feedback}</p>
    </div>
  );
}
