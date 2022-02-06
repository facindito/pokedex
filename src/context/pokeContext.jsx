import React, { useState } from 'react'

const Context = React.createContext({})

export function PokemonContextProvider ({ children }) {
  const [pokemons, setPokemons] = useState([])

  return (
    <Context.Provider value={{ pokemons, setPokemons }}>
      {children}
    </Context.Provider>
  )
}

export default Context
