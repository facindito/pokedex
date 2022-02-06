
import { useContext } from 'react'
import PokemonContext from '../context/pokeContext'

export function useTypePokemons ({ type }) {
  const { pokemons } = useContext(PokemonContext)
  const typesFilter = []

  pokemons.forEach((pokemon) => {
    pokemon.allTypes.forEach((t) => {
      if (t.type.name === type) {
        // eslint-disable-next-line camelcase
        const { name, front_default, allTypes, id } = pokemon
        typesFilter.push({ name, front_default, allTypes, id })
      }
    })
  })
  return { typesFilter }
};
