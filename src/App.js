import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import { useEffect, useState } from "react";
import { getPokemonData, getPokemons, searchPokemon } from "./api";

// If you want to use routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pokemon from "./components/Pokemon";

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [notFound, setNotFound] = useState(false);

  // console.log(pokemons);
  const itemsPerPage = 16;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itemsPerPage, itemsPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itemsPerPage));
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
    console.log("first");
  }, [page]);

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onSearch={onSearchHandler} />
        <Routes> 
          <Route
            path="/"
            element={
              notFound ? (
                <div className="notFound__text"> Not found</div>
              ) : (
                <>
                  <Pokedex
                    pokemons={pokemons}
                    loading={loading}
                    page={page}
                    totalPages={totalPages}
                    setPage={setPage}
                  />
                </>
              )
            }
          />
          <Route path="/pokemon/:pokemonIndex" element={<Pokemon pokemons={pokemons}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
