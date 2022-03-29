import { API_URL, IMG_URL } from './settings'

export default async function getPokemons ({ limit, offset } = {}) {
  const response = await fetch(`${API_URL}pokemon/?offset=${offset}&limit=${limit}`)
  const apiResponse = await response.json()
  return fromApiResponseToPokemons(apiResponse)
};

const fromApiResponseToPokemons = async (apiResponse) => {
  return await getPokemonData(apiResponse.results)
}

const getPokemonData = async (result) => {
  const pokemonArr = await Promise.all(
    result.map(async (pokemon) => {
      const response = await fetch(pokemon.url)
      const apiResult = await response.json()
      const { name, types, id } = apiResult
      const img = `${IMG_URL + id}.png`
      return ({ name, img, types, id })
    })
  )
  return pokemonArr.sort((a, b) => a.id - b.id)
}
