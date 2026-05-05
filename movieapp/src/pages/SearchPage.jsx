import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { searchMovies } from "../services/api";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!query) return;
    const data = await searchMovies(query);
    setResults(data);
  };

  return (
    <div style={{ background: "#F8F1E7", minHeight: "100vh", color: "#5C4033" }}>
      <Navbar />

      <div style={{ paddingTop: "120px", paddingLeft: "60px", paddingRight: "60px" }}>
        <h1 style={{ fontSize: "42px" }}>Search Movies</h1>

        <div style={{ margin: "25px 0" }}>
          <input
            type="text"
            placeholder="Search any movie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              padding: "14px",
              width: "330px",
              fontSize: "16px",
              marginRight: "10px",
              borderRadius: "10px",
              border: "1px solid #EADBC8",
              color: "#5C4033",
              background: "rgba(255,248,240,0.8)"
            }}
          />

          <button
            onClick={handleSearch}
            style={{
              padding: "14px 20px",
              background: "#D8A47F",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            Search
          </button>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {results.map((m) => (
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

export default SearchPage;