import { API_URL } from './settings'

const getPokemonData = async (result) => {
  const pokemonArr = []
  await Promise.all(
    result.map(async (pokemon) => {
      await fetch(pokemon.url)
        .then((response) => response.json())
        .then((result) => {
          const { name, sprites, types, id } = result
          // eslint-disable-next-line camelcase
          const { front_default } = sprites
          const allTypes = types
          // const { name } = type
          pokemonArr.push({ name, front_default, allTypes, id })
        })
    })
  )

  return pokemonArr
}

const fromApiResponseToPokemons = async (apiResponse) => {
  return await getPokemonData(apiResponse.results)
}

export default async function getPokemons ({ limit, offset }) {
  return await fetch(`${API_URL}pokemon/?offset=${offset}&limit=${limit}`)
    .then((response) => response.json())
    .then(fromApiResponseToPokemons)
};
