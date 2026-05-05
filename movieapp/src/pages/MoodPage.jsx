import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { fetchMoviesByGenre } from "../services/api";

function MoodPage() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const moodMap = {
    Happy: 35,
    Romantic: 10749,
    Thriller: 53,
    Emotional: 18,
    "Sci-Fi": 878
  };

  const handleMood = async (mood) => {
    const data = await fetchMoviesByGenre(moodMap[mood]);
    setMovies(data);
  };

  return (
    <div style={{ background: "#F8F1E7", minHeight: "100vh", color: "#5C4033" }}>
      <Navbar />

      <div style={{ paddingTop: "120px", paddingLeft: "60px", paddingRight: "60px" }}>
        <h1 style={{ fontSize: "42px" }}>Choose Your Mood 🎭</h1>

        <div style={{ display: "flex", gap: "15px", margin: "25px 0", flexWrap: "wrap" }}>
          {Object.keys(moodMap).map((mood) => (
            <button
              key={mood}
              onClick={() => handleMood(mood)}
              style={{
                padding: "12px 20px",
                background: "#D8A47F",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer"
              }}
            >
              {mood}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {movies.map((m) => (
            <div
              key={m.id}
              onClick={() => navigate(`/movie/${m.id}`)}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05) translateY(-8px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              style={{
                width: "200px",
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "0.3s",
                background: "rgba(255,248,240,0.72)",
                border: "1px solid #EADBC8",
                boxShadow: "0 8px 18px rgba(92,64,51,0.10)"
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                style={{ width: "100%", height: "280px", objectFit: "cover" }}
              />
              <div style={{ padding: "12px" }}>{m.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoodPage;