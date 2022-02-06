import React from 'react'
import { PokemonTypeColors } from '../../assets/typeColors'
import './style.css'

export default function Pokemon ({ name, img, allTypes, id }) {
  return (
    <div
      className='Pokemon'
      style={{ backgroundColor: PokemonTypeColors[allTypes[0].type.name].medium }}
    >
      <div className='Pokemon-content'>
        <span className='Pokemon-id'>{`#${id}`}</span>
        <img alt='Pokeball' src='/img/pokeball.svg' className='Pokeball' />
        <img alt={name} src={img} className='Pokemon-img' />
      </div>
      <div
        className='Pokemon-info'
        style={{ backgroundColor: PokemonTypeColors[allTypes[0].type.name].light }}
      >
        <div className='Pokemon-name'>
          <h4>{name}</h4>
        </div>
        <div className='Pokemon-types'>
          {
           allTypes.map((p) => {
             return (
               <h4
                 key={p.type.name}
                 style={{ backgroundColor: PokemonTypeColors[p.type.name].medium }}
               >{p.type.name}
               </h4>
             )
           })
          }
        </div>
      </div>
    </div>
  )
}
