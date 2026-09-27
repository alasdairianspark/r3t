import { teams } from "../../../data/teams";

export default async function TeamPage({ params }) {
  const { id } = await params;

  const team = teams[id];

  if (!team) {
    return (
      <main className="page">
        <h1>Equipo no encontrado</h1>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="team-header">
        <div className="team-logo">
          {team.name.charAt(0)}
        </div>

        <div>
          <h1>{team.name}</h1>
          <p>📍 {team.city}</p>
        </div>
      </div>

      <section className="team-section">
        <h2>Sobre el club</h2>

        <p>{team.description}</p>

        <p>
          <strong>Fundado:</strong> {team.founded}
        </p>
      </section>

      <section className="team-section">
        <h2>Próximos partidos</h2>

        <p>
          Próximamente podrás ver aquí todos los partidos del club.
        </p>
      </section>
    </main>
  );
}