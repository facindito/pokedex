
import { useContext, useEffect } from 'react'
import PokemonContext from '../context/pokeContext'
import { PokemonGenerationsEnum } from '../assets/generations'
export function useGenerations ({ id }) {
  const { pokemonsFilter, setPokemonsFilter, pokemons } = useContext(PokemonContext)

  const offSet = PokemonGenerationsEnum[id].offset
  const limit = PokemonGenerationsEnum[id].limit + offSet

  useEffect(async function () {
    setPokemonsFilter(pokemons.slice(offSet, limit))
  }, [id])
  return { pokemonsFilter }
};
