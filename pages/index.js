import React, { useState, useEffect, useCallback } from "react";
import PokemonList from "./comps/pokemonList";
import Header from "./comps/header";
import Footer from "./comps/footer";
// import "../public/static/css/appp.scss";

const Index = props => {
  return (
    <div className="motherDivIndex">
      <Header />
      <PokemonList />
      <Footer />
    </div>
  );
};

export default Index;
