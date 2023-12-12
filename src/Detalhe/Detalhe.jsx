import { Link } from "react-router-dom";
import React from "react";
import Header from "../Componentes/Header";

export default function Detalhe() {
  const { id } = useParams();
  const lista = JSON.parse(localStorage.getItem("Lista"));

  const video = lista.find((objeto) => objeto.id === parseInt(id));

  return (
    <div>
      <Header />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/NovaMusica">Nova Música</Link>
      </nav>
      <iframe src={`https://www.youtube.com/embed/${video.url.slice(17)}`} frameBorder="0"></iframe>
      <p>{video.nomeMusica}</p>
      <p>Compositor: {video.compositor}</p>
      <p>Data de Lançamento: {video.dataLancamento}</p>
      <p>Álbum: {video.album}</p>
      <p>Gênero Musical: {video.generoMusical}</p>
    </div>
  );
}