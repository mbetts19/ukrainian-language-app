import { useEffect, useState } from "react";
import { getLessons } from "../api/lessons"; // Ensure this function exists in `api/lessons.js`
import Auth from "../components/Auth"; // ✅ Ensure `Auth.js` exists inside `/components/`
import Link from "next/link";

export default function Home() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    getLessons().then((data) => {
      if (Array.isArray(data)) {
        setLessons(data);
      } else {
        console.error("Invalid lessons data:", data);
      }
    }).catch((error) => {
      console.error("Error fetching lessons:", error);
    });
  }, []);

  return (
    <div className="min-h-screen bg-light p-4 text-center">
      <Auth />

      <h1 className="text-4xl font-bold mb-6 text-primary">
        Ukrainian Language Lessons
      </h1>

      {lessons.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <Link key={lesson.id} href={`/lesson/${lesson.id}`}>
  		<div className="lesson-card">
    			<h2>{lesson.title}</h2>
  		</div>
	    </Link>
          ))}
        </div>
      ) : (
        <p className="text-secondary text-lg mt-4">No lessons available.</p>
      )}
    </div>
  );
}