import React, { useEffect, useState } from "react";
import Link from "next/link";
import "../../public/static/css/pokemon.scss";

const Pokemon = props => {
  const [pokemon, setPokemon] = useState({
    id: 0,
    name: "",
    sprites: []
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  let capitalizeFirstLetter = string => {
    console.log(string);
    console.log(typeof string);
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const fetchData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
      .then(res => res.json())
      .then(data =>
        setPokemon({
          id: data.id,
          name: capitalizeFirstLetter(data.name),
          sprite: data.sprites.front_default
        })
      );
  };

  // Capitalize first letter


  const { name, url } = pokemon;
  let newTo = {
    pathname: `/poke/${name}`,
    param1: name
  };

  return (
    <Link href={newTo}>
      <a className="viewBtn">
        {pokemon !== null && (
        <div className="motherDivPokemon" key={name}>
          <div className="leftDiv">
            
              <p className="nameP">{name}</p>
            
          </div>
          <img src={pokemon.sprite} alt={name} />
        </div>
        )}
      </a>
    </Link>
  );
};
export default Pokemon;
