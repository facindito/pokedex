import React, { useCallback, useEffect, useRef } from 'react'

import Spinner from '../components/Spinner'
import ListOfPokemons from '../components/ListOfPokemons'
import { usePokemons } from '../hooks/usePokemons'
import useNearScreen from '../hooks/useNearScreen'
import debounce from 'just-debounce-it'

export default function Home () {
  const { pokemons, loading, setPage } = usePokemons({ limit: 20 })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })

  const debounceHandleNextPage = useCallback(debounce(
    () => {
      setPage(prevPage => prevPage + 1)
    }), [])

  useEffect(function () {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return (
    <>
      {
        loading
          ? <Spinner />
          : <>
            <div className='App-Results'>
              <ListOfPokemons pokemons={pokemons} />
              <div id='visor' ref={externalRef} />
            </div>
          </>
      }
    </>
  )
};
