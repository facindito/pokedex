import { API_URL } from './settings'

const fromApiResponseTo = (apiResponse) => {
  const { name, id, types } = apiResponse
  // eslint-disable-next-line camelcase
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  const allTypes = types
  return { id, name, img, allTypes }
}
export default async function getPokemon ({ keyword }) {
  const resp = await fetch(`${API_URL}pokemon/${keyword}`)
  const apiResponse = await resp.json()
  return fromApiResponseTo(apiResponse)
};
