import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const navbarStyle = {
    backgroundColor: "#ffb6c1",
    color: "white",
    display: "flex", 
    justifyContent: "center", 
    padding: "1rem", 
  };

  const linkStyle = {
    textDecoration: "none", 
    color: "white", 
    margin: "0 10px",
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={navbarStyle}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" style={linkStyle}>Home</Link>
              <Link to="/EmDestaque" style={linkStyle}>Em Destaque</Link>
              <Link to="/NovaMusica" style={linkStyle}>Nova Música</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}