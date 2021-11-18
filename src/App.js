import React, { useState, useEffect } from 'react'
import { getPokemon, getAllPokemon } from './Services/pokeService'
import PokemonList from '../src/Pages/pokemonList'
import './App.css';


function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [loading, isLoading] = useState(true)
  const apiURL = 'https://pokeapi.co/api/v2/pokemon?offset=30&limit=8'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(apiURL)

      await loadPokemon(response.results)
      isLoading(false)
    }
    fetchData()
  }, [])

 
  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonGet = await getPokemon(pokemon)
      return pokemonGet
    }))
    setPokemonData(_pokemonData)
    console.log(pokemonData);
  }

  return (
    <>
      {loading ? <h1>Loading...</h1> :
        (
          <>
            {pokemonData.map((pokemon, i) => {
              return <PokemonList key={i} pokemon={pokemon} />
            })}
          </>
        )}
    </>
  );
}

export default App;