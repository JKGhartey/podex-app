import React from "react";
import Pages from "./Pages";
import PokemonCard from "./PokemonCard";

import loadingGif from "../assets/images/Spinner-1s-200px.gif";
import Podex from "../assets/images/a66610540107fcb5b9e47fe73242d5bc.png";

function Pokedex({ pokemons, loading, page, totalPages, setPage }) {
  const prevClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const nextClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };
  // console.log(pokemons);
  return (
    <>
      <img className="mx-auto mb-5 podex" src={Podex} alt="Podex" />
      <div>
        {loading ? (
          <>
            <img src={loadingGif} alt="" />
          </>
        ) : (
          <>
            <div className="container">
              <div className="row gy-4">
                {pokemons &&
                  pokemons?.map((pokemon, index) => {
                    return <PokemonCard pokemon={pokemon} key={index} />;
                  })}
              </div>
            </div>
          </>
        )}
      </div>
      <Pages
        page={page + 1}
        totalPages={totalPages}
        onLeftClick={prevClickHandler}
        onRightClick={nextClickHandler}
      />
    </>
  );
}

export default Pokedex;
