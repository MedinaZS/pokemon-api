import React, { useState } from 'react'

const List = () => {

  const [pokemonList, setPokemonList] = useState([]);

  const getPokemons = () => {

    fetch("https://pokeapi.co/api/v2/pokemon/?limit=1154")
      .then(response => response.json())
      .then(response => {
        // console.log(response.results);
        setPokemonList(response.results);
      })
      .catch(err => console.log(err));
  }


  return (
    <div className='mt-5'>
      <button className='btn btn-secondary px-4' onClick={() => getPokemons()}>Fetch Pokemon</button>
      <div className='pokemon-list mt-4 mx-auto'>
        {pokemonList.map((pokemon, index) => (
          <ul>
            <li key={index}>{pokemon.name}</li>
          </ul>
        ))}
      </div>

    </div>
  )
}

export default List