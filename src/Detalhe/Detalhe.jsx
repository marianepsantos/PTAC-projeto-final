import React from 'react';
import Header from '../Componentes/Header';
import { useParams } from 'react-router-dom';

export default function DetalhesMusica() {
  const { id } = useParams();
  const lista = JSON.parse(localStorage.getItem('Lista')) || [];
  const musica = lista.find((musica) => musica.id == id);

  return (
    <div>
      <Header />
      <h2>Detalhes da Música</h2>
      <iframe src={`https://www.youtube.com/embed/${musica.url.slice(17)}`} frameBorder="0"></iframe>
      <p>{musica.nomeMusica}</p>
      <p>Compositor: {musica.compositor}</p>
      <p>Data de Lançamento: {musica.dataLancamento}</p>
      <p>Álbum: {musica.album}</p>
      <p>Gênero Musical: {musica.generoMusical}</p>
    </div>
  );
}