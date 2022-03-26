import React from 'react'
import './App.css'
import { PokemonContextProvider } from './context/pokeContext'
import { Route } from 'wouter'
import Detail from './pages/Detail'
import Generations from './pages/Generations'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import SearchResults from './pages/SearchResult'

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
              <b>404:</b> Sorry, this page isn't ready yet!
            </Route>
          </div>
        </PokemonContextProvider>
      </section>
    </div>
  )
}

export default App
