"use client";

import { useState } from "react";
import posts from "../data/posts";
import players from "../data/players";
import PostCard from "../components/PostCard/PostCard";

export default function Home() {
  const [activeTab, setActiveTab] = useState("forYou");

  const following = [
    "juan-garcia",
    "pablo-martin",
  ];

  const filteredPosts =
    activeTab === "forYou"
      ? posts
      : posts.filter((post) =>
          following.includes(post.playerId)
        );

  return (
    <main className="feed-page">

      <h1>Rugby Tercer Tiempo</h1>

      <div className="feed-tabs">

        <button
          className={activeTab === "forYou" ? "active" : ""}
          onClick={() => setActiveTab("forYou")}
        >
          Para ti
        </button>

        <button
          className={activeTab === "following" ? "active" : ""}
          onClick={() => setActiveTab("following")}
        >
          Siguiendo
        </button>

      </div>

      <section className="feed">

        {filteredPosts.map((post) => {

          const player = players.find(
            (p) => p.id === post.playerId
          );

          if (!player) return null;

          return (
            <PostCard
              key={post.id}
              post={post}
              player={player}
            />
          );
        })}

      </section>

    </main>
  );
}