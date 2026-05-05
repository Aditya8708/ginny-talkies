import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function LoginPage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleEnter = () => {
    if (!name) return alert("Please enter your name");
    localStorage.setItem("ginnyUser", name);
    navigate("/home");
  };

  return (
    <div
      style={{
        height: "100vh",
        background:
          "linear-gradient(to right, rgba(248,241,231,0.96), rgba(248,241,231,0.88)), url('https://image.tmdb.org/t/p/original/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg')",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: "420px",
          background: "rgba(255,248,240,0.78)",
          backdropFilter: "blur(12px)",
          padding: "40px",
          borderRadius: "25px",
          textAlign: "center",
          boxShadow: "0 8px 24px rgba(92,64,51,0.12)"
        }}
      >
        <img src={logo} alt="logo" style={{ width: "220px" }} />

        <h1 style={{ color: "#5C4033", marginTop: "10px" }}>Welcome to Ginny Talkies</h1>

        <p style={{ color: "#8a6f5c", marginBottom: "25px" }}>
          Your cozy personalized movie recommendation world
        </p>

        <input
          type="text"
          placeholder="Enter your sweet name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "90%",
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #EADBC8",
            outline: "none",
            fontSize: "15px",
            color: "#5C4033",
            background: "white"
          }}
        />

        <button
          onClick={handleEnter}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "14px",
            background: "#D8A47F",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
            boxShadow: "0 6px 14px rgba(197,140,91,0.25)"
          }}
        >
          Enter Ginny Talkies 🤎
        </button>
      </div>
    </div>
  );
}

export default LoginPage;