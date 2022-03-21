import React from 'react'
import { Route } from 'wouter'
import './App.css'
import { PokemonContextProvider } from './context/pokeContext'
import NavBar from './components/NavBar'

import Home from './pages/Home'
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
              component={Generations}
              path='/generation/:id'
            />
            <Route path='/:error'>
              <center>
                <b>404:</b> Sorry, this page isn't ready yet!
              </center>
            </Route>
          </div>
        </PokemonContextProvider>
      </section>
    </div>
  )
}

export default App
