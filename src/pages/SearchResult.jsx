import React from 'react'
import ListOfPokemons from '../components/ListOfPokemons'
import { useSinglePokemon } from '../hooks/useSinglePokemon'

export default function SearchResults ({ params }) {
  const { keyword } = params
  const { pokemonsFilter } = useSinglePokemon({ keyword })

  if (!pokemonsFilter) { return (<h1>Pokemon no encontrado!</h1>) }
  return (
    <>
      <div className='App-Results'>
        <ListOfPokemons pokemons={pokemonsFilter} />
      </div>
    </>
  )
}
