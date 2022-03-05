import { useContext, useEffect } from 'react'
import PokemonContext from '../context/pokeContext'

export function useSinglePokemon ({ keyword }) {
  const { pokemonsFilter, setPokemonsFilter, pokemons } = useContext(PokemonContext)
  // Recuperamos la keyword del localstorage
  const keywordToUse = keyword.toLowerCase() || localStorage.getItem('lastKeyword')
  useEffect(function () {
    setPokemonsFilter(pokemons.filter(p => p.name.match(keyword)))
    // guardamos La keyword en el localstorage
    localStorage.setItem('lastKeyword', keywordToUse)
  }, [keyword, keywordToUse, setPokemonsFilter])

  return { pokemonsFilter }
};
