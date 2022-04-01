import { useContext, useEffect } from 'react'
import getPokemon from '../services/getPokemon'
import PokemonContext from '../context/pokeContext'

export function useSinglePokemon ({ keyword }) {
  const { pokemonsFilter, setPokemonsFilter } = useContext(PokemonContext)
  const keywordToUse = keyword.toLowerCase() || localStorage.getItem('lastKeyword')
  useEffect(function () {
    getPokemon({ keyword: keywordToUse })
      .then(pokemon => {
        setPokemonsFilter(pokemon)
      })
    localStorage.setItem('lastKeyword', keywordToUse)
  }, [keyword, keywordToUse, setPokemonsFilter, pokemonsFilter])

  return { pokemonsFilter }
};
