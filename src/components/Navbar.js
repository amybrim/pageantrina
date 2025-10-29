import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand">
          <span className="crown">♛</span> PageantRina
        </Link>
        <div className="nav-links">
          <Link href="/interview">Interview</Link>
          <Link href="/confidence">Confidence</Link>
          <Link href="/stage">Stage</Link>
          <Link href="/video">Video</Link>
        </div>
      </div>
    </nav>
  );
}
