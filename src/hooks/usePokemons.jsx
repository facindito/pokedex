
import { useEffect, useContext, useState } from 'react'
import getPokemons from '../services/getPokemons'
import PokemonContext from '../context/pokeContext'

export function usePokemons ({ limit, offset } = { limit: 151, offset: 0 }) {
  const { pokemons, setPokemons } = useContext(PokemonContext)
  const [loading, setLoading] = useState(false)

  useEffect(async function () {
    setLoading(true)
    await getPokemons({ limit: limit, offset: offset })
      .then(pokemons => {
        setPokemons(pokemons)
        setLoading(false)
      })
  }, [setPokemons])

  return { pokemons, loading }
};
