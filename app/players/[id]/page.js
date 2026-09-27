import Link from "next/link";
import players from "../../../data/players";
import { teams } from "../../../data/teams";

export default async function PlayerPage({ params }) {
  const { id } = await params;

  const player = players.find((p) => p.id === id);

  if (!player) {
    return <h1>Jugador no encontrado</h1>;
  }

  const team = teams[player.teamId];

  return (
    <main className="player-page">

      <section className="player-header">

        <div className="player-avatar">
          {player.name.charAt(0)}
        </div>

        <div>
          <h1>{player.name}</h1>
          <p>@{player.username}</p>
          <p>{player.position}</p>
        </div>

      </section>

      <section className="player-section">
        <h2>Sobre mí</h2>
        <p>{player.bio}</p>
      </section>

      <section className="player-section">
        <h2>Equipo</h2>

        {team && (
          <Link
            href={`/teams/${team.id}`}
            className="team-button"
          >
            {team.name}
          </Link>
        )}
      </section>

      <section className="player-section">
        <h2>Publicaciones</h2>
        <p>Este jugador todavía no tiene publicaciones.</p>
      </section>

    </main>
  );
}