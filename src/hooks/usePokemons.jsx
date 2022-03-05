
import { useEffect, useContext, useState } from 'react'
import getPokemons from '../services/getPokemons'
import PokemonContext from '../context/pokeContext'

const INITIAL_PAGE = 0

export function usePokemons ({ limit, offset }) {
  const { pokemons, setPokemons } = useContext(PokemonContext)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [offSet, setOffset] = useState(INITIAL_PAGE)
  const [pokemonPage, setPokemonPage] = useState([])

  useEffect(async function () {
    if (pokemons.length > 0) return
    setLoading(true)
    await getPokemons({ limit: 898 })
      .then(pokemons => {
        setPokemons(pokemons)
        setLoading(false)
      })
  }, [setPokemons])

  useEffect(function () {
    if (page === INITIAL_PAGE) return
    setOffset(page * limit)
    setPokemonPage(prevPokemons => prevPokemons.concat(pokemons.slice(offSet, (limit * page))))
  }, [page, setPokemonPage])

  return { pokemons, loading, setPage, pokemonPage }
};
