import { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export default function SpeechTest({ word }) {
  const [isCorrect, setIsCorrect] = useState(null);
  const { transcript, resetTranscript } = useSpeechRecognition();

  const checkPronunciation = () => {
    if (transcript.toLowerCase().includes(word.toLowerCase())) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>🎤 Speak</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>Transcript: {transcript}</p>
      <button onClick={checkPronunciation}>Check</button>
      {isCorrect !== null && (
        <p>{isCorrect ? "✅ Correct!" : "❌ Try Again!"}</p>
      )}
    </div>
  );
}
