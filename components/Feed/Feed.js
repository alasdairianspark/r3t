import Post from "../Post/Post";

export default function Feed() {
  return (
    <section className="feed">
      <h2>Inicio</h2>

      <Post
        user="María López"
        text="Preparando el próximo partido 🏉"
      />

      <Post
        user="Carlos Romero"
        text="Gran entrenamiento hoy 💪"
      />

      <Post
        user="Juan García"
        text="¡Nos vemos en el tercer tiempo!"
      />
    </section>
  );
}