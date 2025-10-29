import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link href="/">Dashboard</Link>
      <Link href="/interview">Interview</Link>
      <Link href="/confidence">Confidence</Link>
      <Link href="/stage">Stage Presence</Link>
      <Link href="/video">Video Stage</Link>
    </nav>
  );
}
