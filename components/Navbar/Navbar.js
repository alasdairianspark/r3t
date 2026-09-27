import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-container">

        <Link href="/" className="navbar-logo">
          🏉 Rugby Tercer Tiempo
        </Link>

        <div className="navbar-links">

          <Link href="/">
            Inicio
          </Link>

          <Link href="/rugby">
            Rugby
          </Link>

          <Link href="/teams/cadiz-rc">
            Equipos
          </Link>

          <Link href="/players/juan-garcia">
            Jugadores
          </Link>

        </div>

      </div>

    </nav>
  );
}