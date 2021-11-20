import React, { useState, useEffect } from 'react'
import { getPokemon, getAllPokemon, getEvolution } from './Services/pokeService'
import PokemonLine from './Pages/PokemonLine'
import './App.css';


function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [loading, isLoading] = useState(true)
  const [pokemonEvo, setPokemonEvo] = useState(false)
  const apiURL = 'https://pokeapi.co/api/v2/pokemon?offset=3&limit=8'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(apiURL)

      await loadPokemon(response.results)
      isLoading(false)
    }
    fetchData()
  }, [])

  useEffect(() => {
    getEvoId(pokemonData);
  }, [pokemonData])

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonGet = await getPokemon(pokemon)
      return pokemonGet
    }))
    setPokemonData(_pokemonData)
  }
  
  const getEvoId = async (data) => {
      let _pokemonEvo = await Promise.all(data.map(async evolution => {
      let evolutionGet = await getEvolution(evolution)
      return evolutionGet
    }))
    setPokemonEvo(_pokemonEvo)
  }


  return (
    <>
      {
        loading ? <h1>Loading...</h1> :
          (
            <>
              {pokemonData.map((pokemon, i) => {
                  return <PokemonLine key={i} pokemon={pokemon} PokeIsEvo="yes" />
              })}
            </>
          )}
    </>
  );
}

export default App;
