import Link from "next/link";
import { teams } from "../../data/teams";

export default function TeamsPage() {
  const teamsList = Object.values(teams);

  return (
    <main className="listing-page">

      <h1>Equipos</h1>

      <p className="listing-description">
        Descubre los clubes de rugby.
      </p>

      <section className="teams-list">

        {teamsList.map((team) => (
          <Link
            key={team.id}
            href={`/teams/${team.id}`}
            className="team-list-card"
          >

            <div className="team-list-logo">
              {team.name.charAt(0)}
            </div>

            <div>
              <h2>{team.name}</h2>
              <p>{team.city}</p>
            </div>

          </Link>
        ))}

      </section>

    </main>
  );
}