import { useEffect, useState } from 'react'
import getPokemonInfo from '../services/getPokemoInfo'

export default function usePokemonInfo ({ id }) {
  const [pokemon, setPokemon] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    getPokemonInfo({ id })
      .then(pokemon => {
        setPokemon(pokemon)
        setLoading(false)
      })
  }, [id, setPokemon])

  return { pokemon, loading }
};
