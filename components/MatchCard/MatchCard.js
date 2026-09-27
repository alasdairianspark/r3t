import Link from "next/link";

export default function MatchCard({
  id,
  homeTeam,
  awayTeam,
  date,
  time,
  venue,
}) {
  return (
    <article className="match-card">
      <div className="match-teams">
        <strong>{homeTeam}</strong>

        <span>vs</span>

        <strong>{awayTeam}</strong>
      </div>

      <div className="match-info">
        <p>📅 {date}</p>
        <p>🕐 {time}</p>
        <p>📍 {venue}</p>
      </div>

      <Link href={`/rugby/${id}`} className="match-button">
        Ver
      </Link>
    </article>
  );
}