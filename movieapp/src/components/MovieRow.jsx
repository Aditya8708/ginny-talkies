import { useNavigate } from "react-router-dom";

function MovieRow({ movies = [] }) {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px 60px 40px 60px" }}>
      <div style={{ display: "flex", gap: "20px", overflowX: "auto", paddingBottom: "10px" }}>
        {movies.map((m) => (
          <div
            key={m.id}
            onClick={() => navigate(`/movie/${m.id}`)}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05) translateY(-8px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            style={{
              minWidth: "210px",
              cursor: "pointer",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              transition: "0.3s",
              background: "rgba(255,248,240,0.72)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 18px rgba(92,64,51,0.10)",
              border: "1px solid #EADBC8"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "#D8A47F",
                color: "white",
                padding: "5px 10px",
                borderRadius: "20px",
                fontSize: "12px",
                zIndex: 2
              }}
            >
              ⭐ {m.vote_average ? m.vote_average.toFixed(1) : "N/A"}
            </div>

            <img
              src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
              alt={m.title}
              style={{ width: "100%", height: "310px", objectFit: "cover" }}
            />

            <div style={{ padding: "14px", color: "#5C4033" }}>
              <p style={{ margin: 0, fontWeight: "bold" }}>{m.title}</p>
              <p style={{ marginTop: "8px", color: "#8a6f5c", fontSize: "13px" }}>
                {m.release_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieRow;