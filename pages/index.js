import Link from "next/link";
import Auth from "../components/Auth";

export default function Home() {
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
          <Link href="/learn" className="primary-btn">Learn more</Link>
          <Link href="/signup" className="secondary-btn">Get Started</Link>
        </div>
        <img src="/hero-image.png" alt="Language Learning" className="hero-image" />
      </header>
    </div>
  );
}