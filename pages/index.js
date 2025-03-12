import { useState } from "react";
import Link from "next/link";
import Auth from "../components/Auth";

export default function Home() {
  const [showLessons, setShowLessons] = useState(false);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/lessons">Lessons</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="auth-button">
          <Auth />
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Ukrainian Language App</h1>
        <p className="subtext">Learn Ukrainian with interactive lessons and AI-powered learning.</p>
        <div className="cta-buttons">
          <button className="primary-btn" onClick={() => setShowLessons(true)}>Learn More</button>
          <Link href="/signup" className="secondary-btn">Get Started</Link>
        </div>
        <img src="/hero-image.png" alt="Language Learning" className="hero-image" />
      </header>

      {/* Lessons Section (Hidden Until Clicked) */}
      <section className={`lessons-section ${showLessons ? "show" : ""}`}>
        <h2 className="lessons-title">Start Learning</h2>
        <p className="lessons-subtext">
          Choose a topic to begin your Ukrainian language journey.
        </p>
        <div className="grid">
          <LessonCard title="Basic Greetings" id="1" />
          <LessonCard title="Common Phrases" id="2" />
          <LessonCard title="Numbers" id="3" />
          <LessonCard title="Colors" id="4" />
          <LessonCard title="Food" id="5" />
        </div>
      </section>
    </div>
  );
}

// Reusable Lesson Card Component
const LessonCard = ({ title, id }) => (
  <Link href={`/lesson/${id}`}>
    <div className="lesson-card">{title}</div>
  </Link>
);