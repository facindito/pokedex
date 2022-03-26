import { API_URL, IMG_URL } from './settings'

export default async function getPokemons ({ limit, offset } = {}) {
  return await fetch(`${API_URL}pokemon/?offset=${offset}&limit=${limit}`)
    .then((response) => response.json())
    .then(fromApiResponseToPokemons)
};

const fromApiResponseToPokemons = async (apiResponse) => {
  return await getPokemonData(apiResponse.results)
}

const getPokemonData = async (result) => {
  const pokemonArr = await Promise.all(
    result.map(async (pokemon) => {
      return await fetch(pokemon.url)
        .then((response) => response.json())
        .then((result) => {
          const { name, types, id } = result
          // eslint-disable-next-line camelcase
          const img = `${IMG_URL + id}.png`
          const allTypes = types
          return ({ name, img, allTypes, id })
        })
    })
  )
  return pokemonArr.sort((a, b) => a.id - b.id)
}
