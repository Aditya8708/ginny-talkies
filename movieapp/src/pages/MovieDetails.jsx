import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import RecommendedRow from "../components/RecommendedRow";
import {
  fetchMovieDetails,
  fetchRecommendedMovies,
  fetchMovieTrailer
} from "../services/api";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommended, setRecommended] = useState([]);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const detail = await fetchMovieDetails(id);
      const rec = await fetchRecommendedMovies(id);
      const trail = await fetchMovieTrailer(id);

      setMovie(detail);
      setRecommended(rec);
      setTrailer(trail);
    };

    loadData();
  }, [id]);

  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(movie);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Added to Favorites 🤎");
  };

  if (!movie) return <h1 style={{ paddingTop: "120px" }}>Loading...</h1>;

  return (
    <div style={{ background: "#F8F1E7", minHeight: "100vh", color: "#5C4033" }}>
      <Navbar />

      <div
        style={{
          paddingTop: "120px",
          paddingLeft: "60px",
          paddingRight: "60px",
          display: "flex",
          gap: "40px",
          flexWrap: "wrap"
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          style={{
            width: "320px",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(92,64,51,0.12)"
          }}
        />

        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "52px", marginTop: "0" }}>{movie.title}</h1>

          <p style={{ color: "#8a6f5c", fontSize: "18px" }}>
            ⭐ {movie.vote_average?.toFixed(1)} | 📅 {movie.release_date}
          </p>

          <p style={{ marginTop: "20px", lineHeight: "1.8", fontSize: "17px" }}>
            {movie.overview}
          </p>

          <div style={{ display: "flex", gap: "15px", marginTop: "25px" }}>
            <button
              onClick={addToFavorites}
              style={{
                padding: "14px 25px",
                background: "#D8A47F",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "16px",
                boxShadow: "0 6px 14px rgba(197,140,91,0.25)"
              }}
            >
              Add To Favorites 🤎
            </button>

            {trailer && (
              <button
                onClick={() => window.open(trailer, "_blank")}
                style={{
                  padding: "14px 25px",
                  background: "#C58C5B",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "16px",
                  boxShadow: "0 6px 14px rgba(197,140,91,0.25)"
                }}
              >
                ▶ Watch Trailer
              </button>
            )}
          </div>
        </div>
      </div>

      <div style={{ padding: "40px 60px" }}>
        <RecommendedRow movies={recommended} />
      </div>
    </div>
  );
}

export default MovieDetails;