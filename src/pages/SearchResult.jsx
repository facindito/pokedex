import React from 'react'
import ListOfPokemons from '../components/ListOfPokemons'
import { useSinglePokemon } from '../hooks/useSinglePokemon'
import Spinner from '../components/Spinner'

export default function SearchResults ({ params }) {
  const { keyword } = params

  const { pokemonsFilter, loading } = useSinglePokemon({ keyword })

  if (pokemonsFilter.length === 0) { return (<h1>Pokémon not found!</h1>) }
  return (
    <>
      <div className='App-Results'>
        {
          loading
            ? <Spinner />
            : <ListOfPokemons pokemons={pokemonsFilter} />
        }
      </div>
    </>
  )
}
