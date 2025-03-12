import Link from "next/link";
import Auth from "../components/Auth";

export default function Home() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/lessons">Lessons</a>
        <a href="/contact">Contact</a>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Learn Ukrainian with Ease</h1>
        <p style={{ fontSize: "1.5rem", fontWeight: "400" }}>
          Master the language with interactive lessons and AI-driven learning.
        </p>
      </header>

      {/* Authentication */}
      <Auth />

      {/* Lesson Cards Grid */}
      <section className="grid">
        <LessonCard title="Basic Greetings" id="1" />
        <LessonCard title="Common Phrases" id="2" />
        <LessonCard title="Numbers" id="3" />
        <LessonCard title="Colors" id="4" />
        <LessonCard title="Food" id="5" />
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Ukrainian Language App | Inspired by Apple</p>
      </footer>
    </div>
  );
}

// Reusable Lesson Card Component
const LessonCard = ({ title, id }) => (
  <Link href={`/lesson/${id}`}>
    <div className="lesson-card">{title}</div>
  </Link>
);