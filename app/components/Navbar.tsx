"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      width: "100%",
      background: "#181c20",
      padding: "1.2rem 0",
      marginBottom: "2.5rem",
      boxShadow: "0 2px 16px #0002",
      display: "flex",
      justifyContent: "center",
      gap: "2.5rem",
      fontFamily: "Space Grotesk, sans-serif",
    }}>
      <Link href="/pitch" style={{ color: "#62C494", fontWeight: 700, fontSize: "1.1rem" }}>Pitch Form</Link>
      <Link href="/match" style={{ color: "#4AD39C", fontWeight: 700, fontSize: "1.1rem" }}>Investor Match</Link>
      <Link href="/generate-pitch" style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>AI Pitch</Link>
      <Link href="/improve-section" style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>Improve Pitch</Link>
      <Link href="/questions" style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>Questions</Link>
      <Link href="/match-investors" style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>All Matches</Link>
      <Link href="/generate-email" style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>Investor Email</Link>
      <Link href="/pitch-status" style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>Pitch Status</Link>
    </nav>
  );
}
