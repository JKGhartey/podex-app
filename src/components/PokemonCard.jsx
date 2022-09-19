import React from "react";
import { Link } from "react-router-dom";
import { colours } from "../pokemon";

function PokemonCard({ pokemon }) {
  const cardClicker = (pokemon) => {
    console.log(pokemon);

    console.log(`clicked ${pokemon.id}`);
  };

  return (
    <>
      <div className="col-12 col-md-6 col-lg-3 card-wrapper">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <span># {pokemon.id} </span>
              {pokemon.name
                .toLowerCase()
                .split(" ")
                .map(
                  (letter) =>
                    letter.charAt(0).toUpperCase() + letter.substring(1)
                )
                .join(" ")}
            </h5>

            <div className="card-text">
              <div className="card__inner">
                <img
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={pokemon.name}
                />
                {
                  <div className="types">
                    {pokemon.types.map((poke, index) => {
                      return (
                        <div key={index} className="group">
                          <span
                            className="badge rounded-pill types "
                            style={{
                              backgroundColor: `${colours[poke.type.name]}`,
                              color: "white",
                            }}
                          >
                            {poke.type.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                }
              </div>
              <Link to={`pokemon/${pokemon.name}`}>
                <button className="cybr-btn" onClick={cardClicker}>
                  See more &raquo;<span aria-hidden>_</span>
                  <span aria-hidden className="cybr-btn__glitch">
                    See more &raquo;_
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonCard;
