import React, { useState, useEffect, useCallback } from "react";
import fetch from "isomorphic-unfetch";
import Pokemon from "./pokemon";
import "../../public/static/css/pokemonList.scss";

const PokemonList = props => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loaded, setLoaded] = useState(0);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(20);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, [limit]);

  const loadingStatus = () => {
    for (let i = 0; i < pokemonList.length; i++) {
      setLoaded(loaded + 1);
    }
  };

  const loadMore = () => {
    setLimit(limit + 20);
  };

  const fetchData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=0`)
      .then(res => res.json())
      .then(data =>
        data.results.map(poke => ({
          name: `${poke.name}`,
          url: `${poke.url}`
        }))
      )
      .then(pokemonList => setPokemonList(pokemonList))
      .catch(error => console.log("parsing failed", error));
  };

  return (
    <div className="pokeContainer">
      {pokemonList.map(poke => {
        console.log(poke);
        const { name, url } = poke;

        return <Pokemon key={name} name={name} url={url} />;
      })}
      <div className="loadBtn" onClick={() => loadMore()}>
        Load More
      </div>
    </div>
  );
};

PokemonList.getInitialProps = async ctx => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"
  );
  const json = await res.json();

  return { json };
};

export default PokemonList;
