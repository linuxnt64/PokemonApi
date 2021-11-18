import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@material-ui/styles'
import pokeColor from '../Pages/pokeColor'
import '../Assets/style.scss'

const useStyles = makeStyles(theme => ({
  /*style grid*/
  grid: {
    flexGrow: 1,
    padding: "20px",
  },
}));

function PokemonList({ pokemon }) {
  const classes = useStyles();

  const [evoLineId, setEvoLineId] = useState(null)

  async function getSpecies() {
    const species = await fetch(pokemon.species.url);
    const res = await species.json();
    let evoLine = res.evolution_chain.url.split('/')
    setEvoLineId(evoLine[6]);

  }
  getSpecies();

  return (
    <>
      <div className='gridContainer'>
        <div className={classes.grid}>
          <div className='pokeType' style={{ backgroundColor: pokeColor[pokemon.name] }}>

            <img className='pokeImage' src={pokemon.sprites.front_default} alt='pokemon' />

            <Grid container>
              <Grid item xs={6}>
                <div className='pokeName'>
                  <>{pokemon.name}</>
                </div>

              </Grid>
              <Grid item xs={6}>
                <div className='pokeOwned'>
                  <div># <span>{pokemon.order}/{evoLineId}</span>
                  </div>
                </div>
              </Grid>
            </Grid>

            <div className='pokeTypes'>
              {
                pokemon.types.map((type, i) => {
                  return (
                    <div className='pokeSkill' key={i}>
                      {type.type.name}
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonList