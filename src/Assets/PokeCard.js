// import React, { useEffect } from 'react'
import './style.scss'
import Grid from '@mui/material/Grid'
import pokeColor from './pokeColor'

export default function PokeCard({pokemon, PokeIsEvo}) {

    return (

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
                        <div># <span>{pokemon.order} / {PokeIsEvo}</span>
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
    )
}
