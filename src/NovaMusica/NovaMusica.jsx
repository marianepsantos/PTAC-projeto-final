import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Componentes/Header";
import { Link } from "react-router-dom";

export default function NovaMusica() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
  const [lista, setLista] = useState(listaLocalStorage);
  const [id, setId] = useState(listaLocalStorage.length > 0 ? listaLocalStorage[listaLocalStorage.length - 1].id + 1 : 1);
  const [nomeMusica, setNomeMusica] = useState("");
  const [compositor, setCompositor] = useState("");
  const [dataLancamento, setDataLancamento] = useState("");
  const [album, setAlbum] = useState("");
  const [generoMusical, setGeneroMusical] = useState("");
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));
  }, [lista]);

  const salvar = (e) => {
    e.preventDefault();
    setLista([
      ...lista,
      {
        id: id,
        nomeMusica: nomeMusica,
        compositor: compositor,
        dataLancamento: dataLancamento,
        album: album,
        generoMusical: generoMusical,
        url: url,
      },
    ]);
    setId(id + 1);
    setNomeMusica("");
    setCompositor("");
    setDataLancamento("");
    setAlbum("");
    setGeneroMusical("");
    setUrl("");
  };

  return (
    <div className="container">
      <Header />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/EmDestaque">Em Destaque</Link>
      </nav>

      <div>
        <h2>Cadastrar Nova Música</h2>
        <form className="form" onSubmit={salvar}>
          <label htmlFor="nomeMusica">Nome da Música:</label>
          <input
            type="text"
            id="nomeMusica"
            value={nomeMusica}
            onChange={(e) => setNomeMusica(e.target.value)}
          />

          <label htmlFor="compositor">Compositor:</label>
          <input
            type="text"
            id="compositor"
            value={compositor}
            onChange={(e) => setCompositor(e.target.value)}
          />

          <label htmlFor="dataLancamento">Data de Lançamento:</label>
          <input
            type="date"
            id="dataLancamento"
            value={dataLancamento}
            onChange={(e) => setDataLancamento(e.target.value)}
          />

          <label htmlFor="album">Álbum:</label>
          <input
            type="text"
            id="album"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
          />

          <label htmlFor="generoMusical">Gênero Musical:</label>
          <input
            type="text"
            id="generoMusical"
            value={generoMusical}
            onChange={(e) => setGeneroMusical(e.target.value)}
          />

          <label htmlFor="url">URL do Vídeo:</label>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <button className="btn btn-outline-dark" type="submit">
            Adicionar Música
          </button>
        </form>
      </div>
    </div>
  );
}