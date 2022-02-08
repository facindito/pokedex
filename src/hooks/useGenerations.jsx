
import { useContext, useEffect, useState } from 'react'
import PokemonContext from '../context/pokeContext'
import getPokemons from '../services/getPokemons'
const PokemonGenerationsEnum = {
  generacion_1: {
    offset: 0,
    limit: 151
  },
  generacion_2: {
    offset: 151,
    limit: 100
  },
  generacion_3: {
    offset: 251,
    limit: 135
  },
  generacion_4: {
    offset: 386,
    limit: 107
  },
  generacion_5: {
    offset: 493,
    limit: 156
  },
  generacion_6: {
    offset: 649,
    limit: 72
  },
  generacion_7: {
    offset: 721,
    limit: 88
  },
  generacion_8: {
    offset: 809,
    limit: 89
  }
}
export function useGenerations ({ generation }) {
  const { pokemons, setPokemons } = useContext(PokemonContext)
  const [loading, setLoading] = useState(false)

  const offSet = PokemonGenerationsEnum[generation].offset
  const limit = PokemonGenerationsEnum[generation].limit

  useEffect(async function () {
    setLoading(true)
    await getPokemons({ limit: limit, offset: offSet })
      .then(pokemons => {
        setPokemons(pokemons)
        setLoading(false)
      })
  }, [generation])

  return { pokemons, loading }
};
