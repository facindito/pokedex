
import { useContext, useEffect, useState } from 'react'
import PokemonContext from '../context/pokeContext'

export function useTypePokemons ({ type }) {
  const { pokemons } = useContext(PokemonContext)
  const [typesFilter, setTypeFilter] = useState([])

  const filter = () => {
    const filterPokemons = []
    pokemons.forEach((pokemon) => {
      pokemon.allTypes.forEach((t) => {
        if (t.type.name === type) {
        // eslint-disable-next-line camelcase
          const { name, front_default, allTypes, id } = pokemon
          filterPokemons.push({ name, front_default, allTypes, id })
        }
      })
    })
    return filterPokemons
  }
  useEffect(function () {
    setTypeFilter(filter())
  }, [type, setTypeFilter])

  return { typesFilter }
};
