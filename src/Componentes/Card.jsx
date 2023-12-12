import React from "react";

export default function VideoCard({ lista }) {
  const cardStyle = {
    backgroundColor: "#fde8f5", 
    padding: "10px",
    margin: "10px",
    width: "300px", 
    display: "inline-block", 
  };

  if (!lista || lista.length === 0) {
    return <p>Nenhum vídeo disponível.</p>;
  }

  return (
    <div>
      {lista.map((video) => (
        <div style={cardStyle} key={video.id}>
          <iframe
            src={`https://www.youtube.com/embed/${video.url.slice(17)}`}
            frameBorder="0"
            title={video.nomeMusica}
            width="100%" 
            height="200px" 
          ></iframe>
          <p>{video.nomeMusica}</p>
        </div>
      ))}
    </div>
  );
}