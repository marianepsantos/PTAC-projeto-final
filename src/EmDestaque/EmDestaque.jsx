import React from "react";
import Header from "../Componentes/Header";
import Card from "../Componentes/Card";
import { Link } from "react-router-dom";

export default function EmDestaque() {
  const destaques = JSON.parse(localStorage.getItem("Lista")).slice(-4);

  return (
    <div>
      <Header />
      <nav>
        <Link to="/Home">Home</Link>
        <Link to="/NovaMusica">Nova Música</Link>
      </nav>
      <Card lista={destaques} />
      {destaques.map((video) => (
        <Link key={video.id} to={`/Detalhe/${video.id}`}>
          Detalhes de {video.nomeMusica}
        </Link>
      ))}
    </div>
  );
}