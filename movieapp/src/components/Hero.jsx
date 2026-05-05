import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        position: "relative",
        background:
          "linear-gradient(to right, rgba(248,241,231,0.95), rgba(248,241,231,0.65)), url('https://image.tmdb.org/t/p/original/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div style={{ maxWidth: "700px" }}>
        <p
          style={{
            color: "#C58C5B",
            fontSize: "18px",
            letterSpacing: "3px",
            marginBottom: "10px",
            fontWeight: "bold"
          }}
        >
          YOUR COZY CINEMA GUIDE
        </p>

        <h1
          style={{
            fontSize: "72px",
            margin: "10px 0",
            lineHeight: "1.1",
            color: "#5C4033"
          }}
        >
          Welcome To Ginny Talkies
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#6d5446",
            lineHeight: "1.6",
            marginTop: "20px"
          }}
        >
          Search trending blockbusters, save your favorites, explore mood-based picks,
          and unlock warm personalized movie recommendations in one adorable platform.
        </p>

        <div style={{ marginTop: "35px", display: "flex", gap: "15px" }}>
          <button
            onClick={() => navigate("/search")}
            style={{
              padding: "14px 30px",
              background: "#D8A47F",
              border: "none",
              color: "white",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "17px",
              fontWeight: "bold"
            }}
          >
            Explore Movies
          </button>

          <button
            onClick={() => navigate("/mood")}
            style={{
              padding: "14px 30px",
              background: "rgba(255,248,240,0.7)",
              border: "1px solid #C58C5B",
              color: "#5C4033",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "17px"
            }}
          >
            Mood Picks
          </button>
        </div>
      </div>

      <div
        style={{
          background: "rgba(255,248,240,0.72)",
          padding: "30px",
          borderRadius: "20px",
          width: "270px",
          textAlign: "left",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          color: "#5C4033"
        }}
      >
        <h2 style={{ color: "#C58C5B", marginBottom: "20px" }}>Why Ginny Talkies?</h2>
        <p style={{ marginBottom: "12px" }}>🧸 Live Trending Movies</p>
        <p style={{ marginBottom: "12px" }}>🎭 Mood Based Picks</p>
        <p style={{ marginBottom: "12px" }}>✨ Smart Similar Suggestions</p>
        <p style={{ marginBottom: "12px" }}>🤎 Personal Favorites Watchlist</p>
      </div>

      <div
        style={{
          position: "absolute",
          top: "120px",
          right: "120px",
          fontSize: "30px",
          opacity: "0.6"
        }}
      >
        ✨
      </div>

      <div
        style={{
          position: "absolute",
          top: "200px",
          left: "50%",
          fontSize: "24px",
          opacity: "0.5"
        }}
      >
        🧸
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "120px",
          right: "300px",
          fontSize: "26px",
          opacity: "0.5"
        }}
      >
        🤎
      </div>
    </div>
  );
}

export default Hero;