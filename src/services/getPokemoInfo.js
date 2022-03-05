import { API_URL } from './settings'
import getPokemon from './getPokemon'
const getPokemonData = async (apiResponse) => {
  const { name, id, types, height, weight, stats, species, abilities } = apiResponse
  const { evolutions, flavorText } = await getPokemonSpecies(species)
  // eslint-disable-next-line camelcase
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  const allTypes = types
  return { id, name, img, allTypes, height, weight, stats, species, evolutions, flavorText, abilities }
}

const getPokemonSpecies = async (species) => {
  return await fetch(species.url)
    .then(resp => resp.json())
    .then(async response => {
      // eslint-disable-next-line camelcase
      const { evolution_chain, flavor_text_entries } = response
      const flavorText = flavor_text_entries[0].flavor_text.replace(/\f/, ' ')
      const { toEvolutions } = await getPokemonEvolution(evolution_chain)
      const evolutions = (toEvolutions) ? await getPokemonEvo({ toEvolutions }) : []
      evolutions.sort((a, b) => a.id - b.id)
      return { evolutions, flavorText }
    })
}

const getPokemonEvolution = async (evolution) => {
  return await fetch(evolution.url)
    .then(resp => resp.json())
    .then(response => {
      const { chain } = response
      const toEvolutions = []
      toEvolutions.push(chain.species.name)
      // eslint-disable-next-line camelcase
      const { evolves_to } = chain
      if (evolves_to.length === 0) return {}
      evolves_to.map(evo => {
        toEvolutions.push(evo.species.name)
        if (evo.evolves_to.length !== 0) toEvolutions.push(evo.evolves_to[0].species.name)
        return toEvolutions
      })
      return { toEvolutions }
    })
}

const getPokemonEvo = async ({ toEvolutions }) => {
  const evolutions = []
  await Promise.all(
    toEvolutions.map(async (evo) => {
      const e = await getPokemon({ keyword: evo })
      evolutions.push(e)
    })
  )
  return evolutions
}

const fromApiResponseTo = async (apiResponse) => {
  return getPokemonData(apiResponse)
}

export default async function getPokemonInfo ({ id }) {
  return await fetch(`${API_URL}pokemon/${id}`)
    .then(resp => resp.json())
    .then(fromApiResponseTo)
};
