import React, { useEffect } from 'react'

import Spinner from '../components/Spinner'
import Pokemon from '../components/Pokemon'
import { useSinglePokemon } from '../hooks/useSinglePokemon'

export default function SearchResults ({ params }) {
  const { keyword } = params
  const { pokemon, loading } = useSinglePokemon({ keyword })

  const { name, front_default, allTypes, id } = pokemon
  if (!pokemon) { return (<h1>Pokemon no encontrado!</h1>) }
  return (
    <>
      {
        loading
          ? <Spinner />
          : <>
            <Pokemon
              name={name}
              key={id}
              img={front_default}
              allTypes={allTypes}
              id={id}
            />
          </>
      }
    </>
  )
}
