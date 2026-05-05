import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import { fetchTrendingMovies, fetchMoviesByGenre } from "../services/api";

function Home() {
  const [trending, setTrending] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [scifiMovies, setScifiMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      setTrending(await fetchTrendingMovies());
      setActionMovies(await fetchMoviesByGenre(28));
      setRomanceMovies(await fetchMoviesByGenre(10749));
      setScifiMovies(await fetchMoviesByGenre(878));
    };

    loadMovies();
  }, []);

  return (
    <div style={{ background: "#F8F1E7", color: "#5C4033", minHeight: "100vh" }}>
      <Navbar />
      <Hero />

      <div style={{ padding: "20px 60px" }}>
        <h2 style={{ fontSize: "34px", marginBottom: "5px" }}>🔥 Trending This Week</h2>
        <p style={{ color: "#8a6f5c" }}>Freshly updated worldwide popular cinema picks</p>
      </div>
      <MovieRow movies={trending} />

      <div style={{ padding: "20px 60px" }}>
        <h2 style={{ fontSize: "34px", marginBottom: "5px" }}>💥 Action Blockbusters</h2>
        <p style={{ color: "#8a6f5c" }}>High intensity action and adventure selections</p>
      </div>
      <MovieRow movies={actionMovies} />

      <div style={{ padding: "20px 60px" }}>
        <h2 style={{ fontSize: "34px", marginBottom: "5px" }}>💕 Romantic Escapes</h2>
        <p style={{ color: "#8a6f5c" }}>Heartwarming love stories and emotional journeys</p>
      </div>
      <MovieRow movies={romanceMovies} />

      <div style={{ padding: "20px 60px" }}>
        <h2 style={{ fontSize: "34px", marginBottom: "5px" }}>🚀 Sci-Fi Universe</h2>
        <p style={{ color: "#8a6f5c" }}>Futuristic worlds, technology and space thrillers</p>
      </div>
      <MovieRow movies={scifiMovies} />

      <div style={{ textAlign: "center", padding: "40px", color: "#8a6f5c" }}>
        This product uses the TMDb API but is not endorsed or certified by TMDb.
      </div>
    </div>
  );
}

export default Home;