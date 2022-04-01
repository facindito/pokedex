import { useContext, useEffect, useState } from 'react'
import getPokemon from '../services/getPokemon'
import PokemonContext from '../context/pokeContext'

export function useSinglePokemon ({ keyword }) {
  const { pokemonsFilter, setPokemonsFilter } = useContext(PokemonContext)
  const [loading, setLoading] = useState(false)

  const keywordToUse = keyword.toLowerCase() || localStorage.getItem('lastKeyword')

  useEffect(function () {
    setLoading(true)
    getPokemon({ keyword: keywordToUse })
      .then(pokemon => {
        setPokemonsFilter(pokemon)
        setLoading(false)
        localStorage.setItem('lastKeyword', keywordToUse)
      })
  }, [keyword, keywordToUse, setPokemonsFilter])

  return { pokemonsFilter, loading }
};
