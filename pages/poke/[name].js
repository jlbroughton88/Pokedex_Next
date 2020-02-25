import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../../public/static/css/pokemonSingle.scss";
import Header from "../comps/header";
import Footer from "../comps/footer";
// import styled from "styled-components";

const PokeSummary = props => {
  const router = useRouter();

  //   const [paramName, setParamName] = useState(router.query.name);
  const [pokemon, setPokemon] = useState({
    id: 0,
    name: "",
    sprites: [],
    abilities: [],
    base_experience: 0,
    forms: [],
    game_showings: [],
    held_items: [],
    moves: [],
    stats: [],
    types: [],
    weight: 0,
    height: 0
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(router.query.name);
  }, [router.query.name]);

  const fetchData = nameP => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nameP}`)
      .then(res => res.json())
      .then(data =>
        setPokemon({
          id: data.id,
          name: data.name,
          sprites: data.sprites,
          abilities: data.abilities,
          base_experience: data.base_experience,
          forms: data.forms,
          game_showings: data.game_indices,
          held_items: data.held_items,
          moves: data.moves,
          stats: data.stats,
          types: data.types,
          weight: data.weight,
          height: data.height
        })
      );
  };

  let capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const {
    id,
    name,
    sprites,
    abilities,
    base_experience,
    forms,
    game_showings,
    held_items,
    moves,
    types,
    weight,
    height,
    stats
  } = pokemon;

  return (
    <div className="motherDivSingle">
      <Header />
      <div className="container">
        <div className="nameId">
          <div className="nameDiv">
            <h2 className="name">{capitalizeFirstLetter(name)}</h2>
          </div>
          <div className="idDiv">
            <p>#{id}</p>
          </div>
        </div>

        <div className="spritesDiv">
          <div className="defaultDiv">
            <h4 className="defaultH">Default</h4>
            <img src={sprites.front_default} alt={sprites.front_default} />
            <img src={sprites.back_default} alt={sprites.back_default} />
          </div>

          <div className="shinyDiv">
            <div className="shinyH">Shiny</div>
            <img src={sprites.front_shiny} alt={sprites.front_shiny} />
            <img src={sprites.back_shiny} alt={sprites.back_shiny} />
          </div>
        </div>
        <div className="heightWeight">
          <div className="heightDiv">
            <p>Height: {height / 2}ft</p>
          </div>
          <div className="weightDiv">
            <p>Weight: {weight}lbs</p>
          </div>
        </div>
        <div className="abilityType">
          <div className="abilityDiv">
            <h4 className="abilitiesH">Abilities:</h4>
            {abilities.map(ablty => {
              return (
                <span className="ability" key={ablty.ability.name}>
                  {capitalizeFirstLetter(ablty.ability.name)}
                  <br />
                </span>
              );
            })}
          </div>
          <div className="typesDiv">
            <div className="typesH">Types:</div>
            {types.map(typ => {
              return (
                <span className="type" id={typ.type.name} key={typ.type.name}>
                  {capitalizeFirstLetter(typ.type.name)}
                </span>
              );
            })}
          </div>
        </div>

        <div className="statsDiv">
          {/* <StatsH>Stats:</StatsH> */}
          {stats.map(stt => {
            return (
              <span className="stat" id={stt.stat.name} key={stt.stat.name}>
                {capitalizeFirstLetter(stt.stat.name)}: {stt.base_stat}
                <br />
              </span>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PokeSummary;
