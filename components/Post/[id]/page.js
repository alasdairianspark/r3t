import Link from "next/link";
import posts from "../../../data/posts";
import players from "../../../data/players";
import comments from "../../../data/comments";

export default async function PostPage({ params }) {
  const { id } = await params;

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <h1>Publicación no encontrada</h1>;
  }

  const player = players.find(
    (p) => p.id === post.playerId
  );

  const postComments = comments.filter(
    (comment) => comment.postId === post.id
  );

  return (
    <main className="post-page">

      <Link href="/" className="back-link">
        ← Volver al Feed
      </Link>

      <article className="post-detail">

        {player && (
          <div className="post-header">

            <div className="post-avatar">
              {player.name.charAt(0)}
            </div>

            <div>
              <Link
                href={`/players/${player.id}`}
                className="post-player-name"
              >
                {player.name}
              </Link>

              <p>{player.position}</p>
            </div>

          </div>
        )}

        <div className="post-content">
          <p>{post.text}</p>
        </div>

        <div className="post-actions">
          <span>❤️ {post.likes}</span>
          <span>💬 {post.comments}</span>
        </div>

      </article>

      <section className="comments-section">

        <h2>Comentarios</h2>

        {postComments.map((comment) => {

          const commentPlayer = players.find(
            (p) => p.id === comment.playerId
          );

          return (
            <div
              key={comment.id}
              className="comment"
            >

              {commentPlayer && (
                <Link
                  href={`/players/${commentPlayer.id}`}
                  className="comment-player"
                >
                  {commentPlayer.name}
                </Link>
              )}

              <p>{comment.text}</p>

            </div>
          );
        })}

      </section>

    </main>
  );
}