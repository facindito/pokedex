import { API_URL, IMG_URL } from './settings'

export default async function getPokemonInfo ({ id }) {
  const resp = await fetch(`${API_URL}pokemon/${id}`)
  const apiResponse = await resp.json()
  return fromApiResponseTo(apiResponse)
};

const fromApiResponseTo = async (apiResponse) => {
  return getPokemonData(apiResponse)
}

const getPokemonData = async (apiResponse) => {
  const { name, id, types, height, weight, stats, species, abilities } = apiResponse
  const { evolutions, flavorText } = await getPokemonSpecies(species)
  const img = `${IMG_URL + id}.png`
  return { id, name, img, types, height, weight, stats, species, evolutions, flavorText, abilities }
}

const getPokemonSpecies = async (species) => {
  const resp = await fetch(species.url)
  const response = await resp.json()
  // eslint-disable-next-line camelcase
  const { evolution_chain, flavor_text_entries } = response
  const flavorText = flavor_text_entries[0].flavor_text.replace(/\f/, ' ')
  const { toEvolutions } = await getPokemonEvolution(evolution_chain)
  const evolutions = (toEvolutions) ? await getPokemonEvo({ toEvolutions }) : []
  evolutions.sort((a, b) => a.id - b.id)
  return { evolutions, flavorText }
}

const getPokemonEvolution = async (evolution) => {
  const resp = await fetch(evolution.url)
  const response = await resp.json()
  const { chain } = response
  const toEvolutions = []
  toEvolutions.push(chain.species.name)
  // eslint-disable-next-line camelcase
  const { evolves_to } = chain
  if (evolves_to.length === 0) { return {} }
  evolves_to.map(evo => {
    toEvolutions.push(evo.species.name)
    if (evo.evolves_to.length !== 0) { toEvolutions.push(evo.evolves_to[0].species.name) }
    return toEvolutions
  })
  return { toEvolutions }
}

const getPokemonEvo = async ({ toEvolutions }) => {
  const evolutions = await Promise.all(
    toEvolutions.map(async (evo) => await getPokemon({ keyword: evo }))
  )
  return evolutions
}

const getPokemon = async ({ keyword }) => {
  const resp = await fetch(`${API_URL}pokemon/${keyword}`)
  const apiResponse = await resp.json()
  const { name, id, types } = apiResponse
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  return { id, name, img, types }
}
