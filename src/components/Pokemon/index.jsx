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
        <p className='Pokemon-id'>{`#${id}`}</p>
        <div className='Pokemon-content-img'>
          <img alt='Pokeball' src='/img/pokeball.svg' className='Pokeball' />
          <img alt={name} src={img} className='Pokemon-img' />
        </div>
      </div>
      <div className='Pokemon-info'>
        <h1 className='Pokemon-name'>{name}</h1>
        <div className='Pokemon-types'>
          {
           allTypes.map((p) => {
             return (
               <h4
                 key={p.type.name}
                 style={{ color: PokemonTypeColors[p.type.name].medium }}
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
