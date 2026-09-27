import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        🏉 R3T
      </div>

      <div className="header-actions">

        <Link href="/search" className="header-icon">
          🔎
        </Link>

        <span className="header-icon">
          🔔
        </span>

        <span className="header-icon">
          👤
        </span>

      </div>
    </header>
  );
}