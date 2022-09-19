import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import loadingGif from "../assets/images/Spinner-1s-200px.gif";

import { colours } from "../pokemon";

function Pokemon() {
  const { pokemonIndex } = useParams();

  const [pokemonData, setPokemonData] = useState();
  const [pokemonSpecies, setPokemonSpecies] = useState();
  const [loadingPokemonData, setLoadingPokemonData] = useState(false);

  const fetchPokemonDetails = async () => {
    setLoadingPokemonData(true);
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data));
    setLoadingPokemonData(false);
  };

  const fetchPokemonSpecies = async () => {
    setLoadingPokemonData(true);
    await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}`)
      .then((res) => res.json())
      .then((data) => setPokemonSpecies(data));
    setLoadingPokemonData(false);
  };

  useEffect(() => {
    fetchPokemonDetails();
    fetchPokemonSpecies();
  }, []);

  // console.log(pokemonData.stats.hp);
  return (
    <>
      <Link
        className="noselect"
        style={{ textDecoration: "none", color: "black" }}
        to="/"
      >
        Back
      </Link>
      {!pokemonData || !pokemonSpecies ? (
        <>
          <img src={loadingGif} alt="" />
        </>
      ) : (
        <>
          <div className="container mt-4  pokemon__information">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-5">
                    <h5>{pokemonData.id} </h5>
                  </div>
                  <div className="col-7">
                    {
                      <div className="types">
                        {pokemonData.types.map((poke, index) => {
                          return (
                            <div key={index} className="group ">
                              <span
                                className=" badge rounded-pill types "
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
                </div>
              </div>
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-md-5 poke__img">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`}
                      alt=""
                    />
                  </div>
                  <div className="col-md-7">
                    <h3 className="mx-auto mb-4">
                      {pokemonData.name
                        .toLowerCase()
                        .split(" ")
                        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(" ")}
                    </h3>
                    <div className="row align-items-center">
                      {pokemonData.stats.map((poke, index) => {
                        return (
                          <div className="pokemon__stats row" key={index}>
                            <div className="col-12 col-md-3" key={index}>
                              <h5 style={{ textTransform: "capitalize" }}>
                                {poke.stat.name}
                              </h5>
                            </div>
                            <div className="col-12 col-md-9">
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressBar"
                                  style={{
                                    width: `${poke.base_stat}%`,
                                  }}
                                >
                                  <small>{poke.base_stat} </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/* <div className="container mt-3">
                      {pokemonSpecies.flavor_text_entries.map((des, index) => {
                          if(
                            des.language.name === "en"
                          )
                          return(
                            <h6 key={index}> {des.flavor_text[1
                            
                            
                            
                             ]} </h6>
                          )
                        })}
                    </div> */}
                    <br></br>
                    <div className="row">
                      <div className="col-md-4">
                        <h5>Abilitites:</h5>
                      </div>
                      <div className="col-md-8">
                        {pokemonData.abilities.map((poke, index) => {
                          return (
                            <div
                              key={index}
                              className="badge bg-danger group mx-3"
                            >
                              <h5>{poke.ability.name} </h5>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Profile</h5>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6">
                        <h6 className="float-right">Height:</h6>
                      </div>
                      <div className="col-md-6">
                        <h6 className="">{pokemonData.height}m </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <h6 className="float-right">Weight:</h6>
                      </div>
                      <div className="col-md-6">
                        <h6 className="">{pokemonData.weight}kg </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <h6 className="float-right">Catch Rate:</h6>
                      </div>
                      <div className="col-md-6">
                        <h6 className="">
                          {`${Math.round(
                            (100 / 255) * pokemonSpecies["capture_rate"]
                          )} %`}{" "}
                        </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <h6 className="float-right">Gender Ratio:</h6>
                      </div>
                      <div className="col-md-6">
                        <div className="progress">
                          <div
                            className="progress-bar bg-success"
                            role="progressBar"
                            style={{
                              width: `${
                                (8 - pokemonSpecies["gender_rate"]) * 12.5
                              }%`,
                            }}
                          >
                            <small>
                              {(8 - pokemonSpecies["gender_rate"]) * 12.5}{" "}
                            </small>
                          </div>
                          <div
                            className="progress-bar bg-warning"
                            role="progressBar"
                            style={{
                              width: `${pokemonSpecies["gender_rate"] * 12.5}%`,
                            }}
                          >
                            <small>
                              {pokemonSpecies["gender_rate"] * 12.5}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6">
                        <h6 className="float-right">Egg Group:</h6>
                      </div>
                      <div className="col-md-6">
                        {pokemonSpecies.egg_groups.map((group, index) => {
                          return (
                            <div
                              key={index}
                              className="text-uppercase badge rounded-pill bg-secondary mx-2"
                            >
                              {group.name}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <h6 className="float-right">Species:</h6>
                      </div>
                      <div className="col-md-6">
                        {pokemonSpecies.genera.map((species, index) => {
                          if (species.language.name === "en")
                            return <h6 key={index}>{species.genus}</h6>;
                        })}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <h6 className="float-right">Hatch Counter:</h6>
                      </div>
                      <div className="col-md-6">
                        <h6 className="">
                          {255 * pokemonSpecies.hatch_counter + 1}
                        </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <h6 className="float-right">Habitat:</h6>
                      </div>
                      <div className="col-md-6">
                        <h6 className="text-uppercase">
                          {pokemonSpecies.habitat.name}
                        </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Evolution</h5>
                <div className="container"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Pokemon;
