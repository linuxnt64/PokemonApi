import React from 'react'
//import Grid from '@emotion/styled'
import { makeStyles} from '@material-ui/styles'
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

  return (
    <>
    <div className='gridContainer'>
      <div className={classes.grid}>
        <div className='pokeType' style={{ backgroundColor: pokeColor[pokemon.name] }}>

          <img className='pokeImage' src={pokemon.sprites.front_default} alt='pokemon' />

          <div container spacing={2}>
            <div item xs={6}>
              <div className='pokeName'>
                <span>{pokemon.name}</span>
              </div>

            </div>
            <div item xs={6}>
              <div className='pokeOwned'>
                <div># <span>{pokemon.order}</span></div>
              </div>
            </div>
          </div>

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