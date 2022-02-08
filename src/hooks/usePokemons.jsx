
import { useEffect, useContext, useState } from 'react'
import getPokemons from '../services/getPokemons'
import PokemonContext from '../context/pokeContext'

const INITIAL_PAGE = 0

export function usePokemons ({ limit, offset }) {
  const { pokemons, setPokemons } = useContext(PokemonContext)
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)

  useEffect(async function () {
    setLoading(true)
    await getPokemons({ limit: limit, offset: offset })
      .then(pokemons => {
        setPokemons(pokemons)
        setLoading(false)
      })
  }, [setPokemons])

  useEffect(function () {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)

    getPokemons({ offset: (page * limit) })
      .then(nextPokemons => {
        setPokemons(prevPokemons => prevPokemons.concat(nextPokemons))
        setLoadingNextPage(false)
      })
  }, [page, setPokemons])

  return { pokemons, loading, setPage, loadingNextPage }
};
