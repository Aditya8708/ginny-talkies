import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const user = localStorage.getItem("ginnyUser");

  const handleLogout = () => {
    localStorage.removeItem("ginnyUser");
    navigate("/");
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "10px 40px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(248,241,231,0.92)",
        backdropFilter: "blur(12px)",
        color: "#5C4033",
        position: "fixed",
        top: 0,
        zIndex: 9999,
        borderBottom: "1px solid #EADBC8"
      }}
    >
      <img
        src={logo}
        alt="Ginny Talkies"
        onClick={() => navigate("/home")}
        style={{
          height: "68px",
          cursor: "pointer"
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "28px",
          cursor: "pointer",
          fontSize: "16px",
          alignItems: "center",
          fontWeight: "600"
        }}
      >
        <span onClick={() => navigate("/home")}>Home</span>
        <span onClick={() => navigate("/search")}>Search</span>
        <span onClick={() => navigate("/favorites")}>Favorites</span>
        <span onClick={() => navigate("/mood")}>Mood Picks</span>

        <span
          style={{
            background: "rgba(216,164,127,0.18)",
            padding: "8px 14px",
            borderRadius: "20px",
            color: "#C58C5B"
          }}
        >
          Hi, {user} 🤎
        </span>

        <button
          onClick={handleLogout}
          style={{
            padding: "9px 16px",
            background: "#D8A47F",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            boxShadow: "0 6px 14px rgba(197,140,91,0.25)"
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;