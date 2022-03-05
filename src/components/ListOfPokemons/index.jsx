/* eslint-disable camelcase */
import React from 'react'

import Pokemon from '../Pokemon'
import './style.css'

function ListOfPokemons ({ pokemons }) {
  return (
    <div className='Pokemons'>
      {
        pokemons
          .map(({ name, img, allTypes, id }) =>
            <Pokemon
              name={name}
              key={id}
              img={img}
              allTypes={allTypes}
              id={id}
            />
          )
      }
    </div>
  )
}

export default React.memo(ListOfPokemons)
