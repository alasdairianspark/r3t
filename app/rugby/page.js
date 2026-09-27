import MatchCard from "../../components/MatchCard/MatchCard";

const matches = [
  {
    id: 1,
    homeTeam: "Cádiz RC",
    awayTeam: "San Fernando RC",
    date: "12 octubre 2026",
    time: "12:00",
    venue: "Campo Manuel Becerra",
  },
  {
    id: 2,
    homeTeam: "Marbella RC",
    awayTeam: "CR Málaga",
    date: "18 octubre 2026",
    time: "11:30",
    venue: "Estadio Municipal de Marbella",
  },
  {
    id: 3,
    homeTeam: "CR Sevilla",
    awayTeam: "Jaén Rugby",
    date: "25 octubre 2026",
    time: "13:00",
    venue: "Campo de La Cartuja",
  },
];

export default function Rugby() {
  return (
    <main className="page">
      <h1>Rugby Cercano</h1>

      <p className="page-subtitle">
        Partidos y eventos cerca de ti
      </p>

      <section className="matches">
        {matches.map((match) => (
          <MatchCard
            key={match.id}
            {...match}
          />
        ))}
      </section>
    </main>
  );
}