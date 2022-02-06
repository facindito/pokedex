import React from 'react'
import { Route } from 'wouter'
import './App.css'
import { PokemonContextProvider } from './context/pokeContext'
import NavBar from './components/Menu'

import Home from './pages/Home'
import Types from './pages/Types'
import SearchResults from './pages/SearchResult'
import Detail from './pages/Detail'
import Generations from './pages/Generations'

function App () {
  return (
    <div className='App'>
      <section className='App-Content'>
        <PokemonContextProvider>
          <NavBar />
          <div className='App-Main'>
            <Route
              component={Home}
              path='/'
            />
            <Route
              component={SearchResults}
              path='/search/:keyword'
            />
            <Route
              component={Detail}
              path='/pokemon/:id'
            />
            <Route
              component={Types}
              path='/type/:type'
            />
            <Route
              component={Generations}
              path='/:generation'
            />
          </div>
        </PokemonContextProvider>
      </section>
    </div>
  )
}

export default App
