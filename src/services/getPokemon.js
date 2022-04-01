import { API_URL, IMG_URL } from './settings'

export default async function getPokemon ({ keyword }) {
  const response = await fetch(`${API_URL}pokemon/?limit=898`)
  const apiResponse = await response.json()
  return fromApiResponseToPokemons(apiResponse, keyword)
};

const fromApiResponseToPokemons = async (apiResponse, keyword) => {
  const { results } = apiResponse
  const filter = results.filter(p => p.name.match(keyword))
  return await getPokemonData(filter)
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
