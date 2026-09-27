import Link from "next/link";
const matches = {
  1: {
    homeTeam: "Cádiz RC",
    homeTeamId: "cadiz-rc",

    awayTeam: "San Fernando RC",
    awayTeamId: "san-fernando-rc",

    date: "12 octubre 2026",
    time: "12:00",
    venue: "Campo Manuel Becerra",
  },

  2: {
    homeTeam: "Marbella RC",
    homeTeamId: "marbella-rc",

    awayTeam: "CR Málaga",
    awayTeamId: "cr-malaga",

    date: "18 octubre 2026",
    time: "11:30",
    venue: "Estadio Municipal de Marbella",
  },

  3: {
    homeTeam: "CR Sevilla",
    homeTeamId: "cr-sevilla",

    awayTeam: "Jaén Rugby",
    awayTeamId: "jaen-rugby",

    date: "25 octubre 2026",
    time: "13:00",
    venue: "Campo de La Cartuja",
  },
};

export default async function MatchPage({ params }) {
  const { id } = await params;
  const match = matches[id];

  if (!match) {
    return (
      <main className="page">
        <h1>Partido no encontrado</h1>
      </main>
    );
  }

  return (
    <main className="page match-detail">
      <h1>{match.homeTeam} vs {match.awayTeam}</h1>

      <div className="match-detail-info">
        <p>📅 {match.date}</p>
        <p>🕐 {match.time}</p>
        <p>📍 {match.venue}</p>
      </div>

      <section className="match-teams-detail">
  <div>
    <h2>{match.homeTeam}</h2>

    <Link
      href={`/teams/${match.homeTeamId}`}
      className="team-button"
    >
      Ver perfil
    </Link>
  </div>

  <span>VS</span>

  <div>
    <h2>{match.awayTeam}</h2>

    <Link
      href={`/teams/${match.awayTeamId}`}
      className="team-button"
    >
      Ver perfil
    </Link>
  </div>
</section>
    </main>
  );
}