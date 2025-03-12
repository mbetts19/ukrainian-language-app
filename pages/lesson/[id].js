import { useRouter } from "next/router";
import { getLessons } from "../../api/lessons";

export default function LessonPage({ lesson }) {
  if (!lesson) return <h1 className="text-center text-red-500">Lesson Not Found</h1>;

  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-blue-900">{lesson.title}</h1>
      <p className="text-lg mt-4">Lesson content will go here...</p>
    </div>
  );
}

export async function getStaticPaths() {
  const lessons = await getLessons();
  const paths = lessons.map((lesson) => ({
    params: { id: lesson.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const lessons = await getLessons();
  const lesson = lessons.find((l) => l.id.toString() === params.id);

  return { props: { lesson } };
}
