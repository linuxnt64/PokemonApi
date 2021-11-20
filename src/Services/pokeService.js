export async function getAllPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url).then(res => res.json())
      .then(data => {
        resolve(data)
      })
  })
}

export function getPokemon({ url }) {
  return new Promise((resolve, reject) => {
    fetch(url).then(res => res.json())
      .then(data => {
        resolve(data)
      })
  })
}

export function getEvolution(pokemon) {
  return new Promise((resolve, reject) => {
    fetch(pokemon.species.url).then(res => res.json())
      .then(data => {
        let evoLine = data.evolution_chain.url.split('/')
        resolve(evoLine[6])
      })
  })
}
/*
async function getEvoId(pokemonArray) {
  await Promise.all(pokemonArray.map(async(pokemon) => {
    const species = await fetch(pokemon.species.url);
    const res = await species.json();
    let evoLine = res.evolution_chain.url.split('/')
    console.log(evoState)
//     setEvoState(evoLine[6]);

    setEvoState( [ evoLine[6],...evoState]  );
  }))
} */