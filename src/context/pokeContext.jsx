import React, { useState } from 'react'

const Context = React.createContext({})

export function PokemonContextProvider ({ children }) {
  const [pokemons, setPokemons] = useState([])
  const [pokemonsFilter, setPokemonsFilter] = useState([])
  const [typeSelect, setTypeSelect] = useState('')

  return (
    <Context.Provider value={{ pokemons, setPokemons, pokemonsFilter, setPokemonsFilter, typeSelect, setTypeSelect }}>
      {children}
    </Context.Provider>
  )
}

export default Context
