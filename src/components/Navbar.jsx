import React from "react";
import { useState } from "react";
import "./Components.css";
function Navbar({ onSearch }) {
  const [search, setSearch] = useState("dito ");
  //   const [pokemon, setPokemon] = useState();

  const onChangeHandler = (e) => {
    console.log("pokemon", e.target.value);
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onClick = async (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <div>
      <nav className="navbar bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png"
              alt="logo"
            />
          </a>
          <form className="search d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Pokemon"
              aria-label="Search Pokemon"
              onChange={onChangeHandler}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={onClick}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
