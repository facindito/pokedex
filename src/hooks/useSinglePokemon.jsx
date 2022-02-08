import { useEffect, useState } from 'react'
import getPokemon from '../services/getPokemon'

export function useSinglePokemon ({ keyword }) {
  const [pokemon, setPokemon] = useState('')
  // Recuperamos la keyword del localstorage
  const [loading, setLoading] = useState(false)
  const keywordToUse = keyword.toLowerCase() || localStorage.getItem('lastKeyword')

  useEffect(function () {
    setLoading(true)
    getPokemon({ keyword: keywordToUse })
      .then(pokemon => {
        setPokemon(pokemon)
        setLoading(false)
        // guardamos La keyword en el localstorage
        localStorage.setItem('lastKeyword', keywordToUse)
      })
  }, [keyword, keywordToUse, setPokemon])

  return { pokemon, loading }
};
