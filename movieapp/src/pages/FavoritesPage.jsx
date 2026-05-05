import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function FavoritesPage() {
  const navigate = useNavigate();
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div style={{ background: "#F8F1E7", minHeight: "100vh", color: "#5C4033" }}>
      <Navbar />

      <div style={{ paddingTop: "120px", paddingLeft: "60px", paddingRight: "60px" }}>
        <h1 style={{ fontSize: "42px" }}>Your Favorites 🤎</h1>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
          {favorites.map((m, index) => (
            <div
              key={index}
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

export default FavoritesPage;