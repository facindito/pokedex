import React from 'react'
import { useSinglePokemon } from '../hooks/useSinglePokemon'
import Pokemon from '../components/Pokemon'

export default function SearchResults ({ params }) {
  const { keyword } = params
  const { pokemon } = useSinglePokemon({ keyword })
  const { id, name, front_default, allTypes } = pokemon
  if (!pokemon) { return (<h4>Pokemon no encontrado!</h4>) }
  return (
    <Pokemon
      name={name}
      key={id}
      img={front_default}
      allTypes={allTypes}
      id={id}
    />
  )
}
