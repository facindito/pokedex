import { useEffect, useState } from 'react'
import getPokemon from '../services/getPokemon'

export function useSinglePokemon ({ keyword }) {
  const [pokemon, setPokemon] = useState('')
  // Recuperamos la keyword del localstorage
  const keywordToUse = keyword.toLowerCase() || localStorage.getItem('lastKeyword')

  useEffect(function () {
    getPokemon({ keyword: keywordToUse })
      .then(pokemon => {
        setPokemon(pokemon)
        // guardamos La keyword en el localstorage
        localStorage.setItem('lastKeyword', keywordToUse)
      })
  }, [keyword, keywordToUse, setPokemon])

  return { pokemon }
};
