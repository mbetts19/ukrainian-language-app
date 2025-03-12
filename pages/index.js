import { useEffect, useState } from "react";
import { getLessons } from "../api/lessons";
import Auth from "../components/Auth";
import Link from "next/link";

export default function Home() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    getLessons().then(data => setLessons(data));
  }, []);

  return (
    <div className="min-h-screen bg-blue-100 p-6 text-center">
      <Auth />
      <h1 className="text-4xl font-bold mb-6 text-blue-900">Ukrainian Language Lessons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <Link key={lesson.id} href={`/lesson/${lesson.id}`} className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-200 transition">
            <h2 className="text-xl font-semibold">{lesson.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}