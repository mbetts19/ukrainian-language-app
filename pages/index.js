import { useEffect, useState } from 'react';
import { getLessons } from '../api/lessons';

export default function Home() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    getLessons().then(data => setLessons(data));
  }, []);

  return (
    <div>
      <h1>Ukrainian Language Lessons</h1>
      {lessons.map((lesson) => (
        <div key={lesson.id}>
          <h2>{lesson.title}</h2>
          {lesson.words.map((word, index) => (
            <p key={index}>
              {word.uk} - {word.en}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
