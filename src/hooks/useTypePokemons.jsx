
import { useContext, useEffect, useState, useCallback } from 'react'
import PokemonContext from '../context/pokeContext'

export function useTypePokemons ({ type }) {
  const { pokemonsFilter, typeSelect } = useContext(PokemonContext)
  const [typesFilter, setTypeFilter] = useState([])

  const filter = useCallback(() => {
    const filter = []
    pokemonsFilter.forEach((pokemon) => {
      pokemon.types.forEach((t) => {
        if (t.type.name === type) {
          // eslint-disable-next-line camelcase
          const { name, img, types, id } = pokemon
          filter.push({ name, img, types, id })
        }
      })
    })
    return filter
  }, [typeSelect])

  useEffect(function () {
    setTypeFilter(filter())
  }, [type, setTypeFilter, typeSelect])

  return { typesFilter }
};
