import React from "react";
import { Link } from "react-router-dom";

export default function VideoCard({ lista }) {
  if (!lista || lista.length === 0) {
    return <p>Nenhum vídeo disponível.</p>;
  }

  return (
    <div>
      {lista.map((video) => (
        <div className="cantorCard" key={video.id}>
          <Link to={`/Detalhe/${video.id}`}>
            <iframe src={`https://www.youtube.com/embed/${video.url.slice(17)}`} frameBorder="0" title={video.nomeMusica}></iframe>
            <p>{video.nomeMusica}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}