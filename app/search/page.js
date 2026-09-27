import Link from "next/link";
import players from "../../data/players";
import { teams } from "../../data/teams";

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = params?.q || "";

  const search = query.toLowerCase().trim();

  const matchingPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(search)
  );

  const matchingTeams = Object.values(teams).filter((team) =>
    team.name.toLowerCase().includes(search)
  );

  return (
    <main className="search-page">

      <h1>Buscar</h1>

      <form
  className="search-form"
  action="/search"
  method="GET"
>

        <input
          type="text"
          name="q"
          placeholder="Buscar jugadores o equipos..."
          defaultValue={query}
        />

        <button type="submit">
          Buscar
        </button>

      </form>

      {query && (
        <p className="search-result-text">
          Resultados para: <strong>{query}</strong>
        </p>
      )}

      {query && matchingTeams.length > 0 && (
        <section className="search-section">

          <h2>Equipos</h2>

          {matchingTeams.map((team) => (
            <Link
              key={team.id}
              href={`/teams/${team.id}`}
              className="search-result"
            >
              <div className="search-avatar">
                {team.name.charAt(0)}
              </div>

              <div>
                <strong>{team.name}</strong>
                <p>{team.city}</p>
              </div>
            </Link>
          ))}

        </section>
      )}

      {query && matchingPlayers.length > 0 && (
        <section className="search-section">

          <h2>Jugadores</h2>

          {matchingPlayers.map((player) => (
            <Link
              key={player.id}
              href={`/players/${player.id}`}
              className="search-result"
            >
              <div className="search-avatar">
                {player.name.charAt(0)}
              </div>

              <div>
                <strong>{player.name}</strong>
                <p>{player.position}</p>
              </div>
            </Link>
          ))}

        </section>
      )}

      {query &&
        matchingTeams.length === 0 &&
        matchingPlayers.length === 0 && (
          <p>No encontramos resultados.</p>
        )}

    </main>
  );
}