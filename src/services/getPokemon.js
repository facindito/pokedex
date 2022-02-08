import { API_URL } from './settings'

const fromApiResponseTo = (apiResponse) => {
  const { name, id, types } = apiResponse
  // eslint-disable-next-line camelcase
  const front_default = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  const allTypes = types
  return { id, name, front_default, allTypes }
}
export default async function getPokemon ({ keyword }) {
  return await fetch(`${API_URL}pokemon/${keyword}`)
    .then(resp => resp.json())
    .then(fromApiResponseTo)
};
