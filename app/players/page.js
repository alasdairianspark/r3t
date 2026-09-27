import Link from "next/link";
import players from "../../data/players";
import { teams } from "../../data/teams";

export default function PlayersPage() {
  return (
    <main className="listing-page">

      <h1>Jugadores</h1>

      <p className="listing-description">
        Descubre jugadores de rugby.
      </p>

      <section className="players-list">

        {players.map((player) => {

          const team = teams[player.teamId];

          return (
            <Link
              key={player.id}
              href={`/players/${player.id}`}
              className="player-list-card"
            >

              <div className="player-list-avatar">
                {player.name.charAt(0)}
              </div>

              <div>

                <h2>{player.name}</h2>

                <p>{player.position}</p>

                {team && (
                  <p>{team.name}</p>
                )}

              </div>

            </Link>
          );
        })}

      </section>

    </main>
  );
}