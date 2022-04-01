
import { useEffect, useState } from 'react'
import getPokemons from '../services/getPokemons'

const INITIAL_PAGE = 0

export function usePokemons ({ limit, offset }) {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [offSet, setOffset] = useState(INITIAL_PAGE)
  const [pokemonPage, setPokemonPage] = useState([])

  useEffect(function () {
    if (page === INITIAL_PAGE) return
    setLoading(true)
    setOffset(page * limit)
    getPokemons({ limit: limit, offset: offSet })
      .then(nextPokemons => {
        setPokemonPage(prevPokemons => prevPokemons.concat(nextPokemons))
        setLoading(false)
      })
  }, [page, setPokemonPage])

  return { loading, setPage, pokemonPage }
};
