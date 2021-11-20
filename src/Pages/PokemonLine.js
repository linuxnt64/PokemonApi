import React from 'react'
import { makeStyles } from '@material-ui/styles'
import '../Assets/style.scss'
import PokeCard from '../Assets/PokeCard'

const useStyles = makeStyles(theme => ({
  /*style grid*/
  grid: {
    flexGrow: 3,
    padding: "20px",
  },
}));


function PokemonLine({pokemon, PokeIsEvo}) {
  const classes = useStyles();
  //console.log("PokeIsEvo: ", PokeIsEvo);
  return (
    <>
      <div className='gridContainer'>
        <div className={classes.grid}>
          <PokeCard pokemon={pokemon} PokeIsEvo={PokeIsEvo}/>
        </div>
      </div>
    </>
  )
}

export default PokemonLine