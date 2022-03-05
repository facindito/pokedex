
import { useContext, useEffect, useState } from 'react'
import PokemonContext from '../context/pokeContext'

export function useTypePokemons ({ type }) {
  const { pokemons, pokemonsFilter, typeSelect } = useContext(PokemonContext)
  const [typesFilter, setTypeFilter] = useState([])

  const filter = () => {
    const filter = []
    if (pokemonsFilter.length === 0) {
      pokemons.forEach((pokemon) => {
        pokemon.allTypes.forEach((t) => {
          if (t.type.name === type) {
            // eslint-disable-next-line camelcase
            const { name, img, allTypes, id } = pokemon
            filter.push({ name, img, allTypes, id })
          }
        })
      })
    } else {
      pokemonsFilter.forEach((pokemon) => {
        pokemon.allTypes.forEach((t) => {
          if (t.type.name === type) {
            // eslint-disable-next-line camelcase
            const { name, img, allTypes, id } = pokemon
            filter.push({ name, img, allTypes, id })
          }
        })
      })
    }
    return filter
  }
  useEffect(function () {
    setTypeFilter(filter())
  }, [type, setTypeFilter, typeSelect])

  return { typesFilter }
};
