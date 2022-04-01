
import { useContext, useEffect, useState } from 'react'
import PokemonContext from '../context/pokeContext'
import { PokemonGenerationsEnum } from '../assets/generations'
import getPokemons from '../services/getPokemons'

export function useGenerations ({ id }) {
  const { pokemonsFilter, setPokemonsFilter, setTypeSelect } = useContext(PokemonContext)
  const [loading, setLoading] = useState(false)

  const offSet = PokemonGenerationsEnum[id].offset
  const limit = PokemonGenerationsEnum[id].limit

  useEffect(function () {
    setLoading(true)
    getPokemons({ limit: limit, offset: offSet })
      .then(pokemons => {
        setPokemonsFilter(pokemons)
        setLoading(false)
      })
    setTypeSelect([])
  }, [id])
  return { pokemonsFilter, loading }
};
