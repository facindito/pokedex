import React from 'react'
import ListOfPokemons from '../components/ListOfPokemons'
import { useSinglePokemon } from '../hooks/useSinglePokemon'

export default function SearchResults ({ params }) {
  const { keyword } = params

  const { pokemonsFilter } = useSinglePokemon({ keyword })

  if (pokemonsFilter.length === 0) { return (<h1>Pokémon not found!</h1>) }
  return (
    <>
      <div className='App-Results'>
        <ListOfPokemons pokemons={pokemonsFilter} />
      </div>
    </>
  )
}
