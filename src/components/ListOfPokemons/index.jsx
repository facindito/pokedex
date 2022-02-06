/* eslint-disable camelcase */
import { React } from 'react'

import Pokemon from '../Pokemon'
import './style.css'

export default function ListOfPokemons ({ pokemons }) {
  return (
    <div className='Pokemons'>
      {
        pokemons
          .sort((a, b) => a.id - b.id)
          .map(({ name, front_default, allTypes, id }) =>
            <Pokemon
              name={name}
              key={id}
              img={front_default}
              allTypes={allTypes}
              id={id}
            />
          )
      }
    </div>
  )
}
