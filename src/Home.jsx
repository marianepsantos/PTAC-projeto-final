import React from "react";
import Header from "./Componentes/Header";
import Card from "./Componentes/Card";
import { Link } from "react-router-dom";

export default function Home() {
  const lista = JSON.parse(localStorage.getItem("Lista"));

  return (
    <div>
      <Header />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/EmDestaque">Em Destaque</Link>
        <Link to="/NovaMusica">Nova Música</Link>
      </nav>
      <Card lista={lista} />
    </div>
  );
}