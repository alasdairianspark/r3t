"use client";

import Link from "next/link";
import { useState } from "react";

export default function PostCard({ post, player }) {
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);

  function handleLike(event) {
    event.preventDefault();
    event.stopPropagation();

    if (liked) {
      setLikes((currentLikes) => currentLikes - 1);
      setLiked(false);
    } else {
      setLikes((currentLikes) => currentLikes + 1);
      setLiked(true);
    }
  }

  return (
    <article className="post-card">

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

      <Link
        href={`/posts/${post.id}`}
        className="post-link"
      >
        <div className="post-content">
          <p>{post.text}</p>
        </div>
      </Link>

      <div className="post-actions">

        <button
          type="button"
          onClick={handleLike}
          className={`like-button ${liked ? "liked" : ""}`}
        >
          {liked ? "❤️" : "♡"} {likes}
        </button>

        <Link
          href={`/posts/${post.id}`}
          className="comments-button"
        >
          💬 {post.comments}
        </Link>

      </div>

    </article>
  );
}