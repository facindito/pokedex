import React, { useCallback, useEffect, useRef, useContext } from 'react'

import Spinner from '../components/Spinner'
import ListOfPokemons from '../components/ListOfPokemons'
import { usePokemons } from '../hooks/usePokemons'
import useNearScreen from '../hooks/useNearScreen'
import PokemonContext from '../context/pokeContext'
import debounce from 'just-debounce-it'

export default function Home () {
  const { loading, setPage, pokemonPage } = usePokemons({ limit: 20 })
  const { setPokemonsFilter } = useContext(PokemonContext)
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  const debounceHandleNextPage = useCallback(
    debounce(() => {
      setPage((prevPage) => prevPage + 1)
    }), [])

  useEffect(function () {
    setPokemonsFilter([])
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen, setPokemonsFilter])
  return (
    <>
      {
        loading
          ? <Spinner />
          : <div className='App-Results'>
            <ListOfPokemons pokemons={pokemonPage} />
            <div id='visor' ref={externalRef} />
          </div>
      }
    </>
  )
}
