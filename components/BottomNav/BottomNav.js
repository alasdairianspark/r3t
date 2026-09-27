import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">

      <Link href="/">
        🏠
      </Link>

      <Link href="/buscar">
        🔎
      </Link>

      <Link href="/rugby">
        🏉
      </Link>

      <Link href="/mensajes">
        💬
      </Link>

      <Link href="/perfil">
        👤
      </Link>

    </nav>
  );
}