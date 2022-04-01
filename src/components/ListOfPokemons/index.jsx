import React from 'react'
import Pokemon from '../Pokemon'
import './style.css'

export default function ListOfPokemons ({ pokemons }) {
  return (
    <div className='Pokemons'>
      {
        pokemons
          .map(({ name, img, types, id }) =>
            <Pokemon
              name={name}
              key={id}
              img={img}
              types={types}
              id={id}
            />
          )
      }
    </div>
  )
}
