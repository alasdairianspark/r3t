export default function Post({ user, text }) {
  return (
    <article className="post">
      <h3>{user}</h3>

      <p>{text}</p>

      <div className="post-actions">
        ❤️
        💬
      </div>
    </article>
  );
}