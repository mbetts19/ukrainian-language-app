import { useEffect, useState } from "react";
import { getLessons } from "../api/lessons";
import Auth from "../components/Auth";
import Quiz from "../components/Quiz";

export default function Home() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    getLessons().then(data => setLessons(data));
  }, []);

  return (
    <div>
      <Auth />
      <h1>Ukrainian Language Lessons</h1>
      {lessons.length === 0 ? (
        <p>Loading lessons...</p>
      ) : (
        lessons.map((lesson) => (
          <div key={lesson.id}>
            <h2>{lesson.title}</h2>
            {lesson.words.map((word, index) => (
              <p key={index}>
                {word.uk} - {word.en}
              </p>
            ))}
            {/* Add Quiz */}
            <Quiz
              question={`What is the Ukrainian word for "${lesson.words[0].en}"?`}
              options={lesson.words.map(word => word.uk)}
              correctAnswer={lesson.words[0].uk}
            />
          </div>
        ))
      )}
    </div>
  );
}