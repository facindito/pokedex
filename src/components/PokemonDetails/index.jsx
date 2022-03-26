import React from 'react'
import { PokemonTypeColors } from '../../assets/typeColors'
import { Link } from 'wouter'
import './style.css'

export default function PokemonDetailCard ({ id, name, img, allTypes, height, weight, stats, evolutions, flavorText, abilities }) {
  return (
    <div className='container'>
      <div className='Pokemon-container'>
        <div
          className='Pokemon-detail'
          style={{ backgroundColor: PokemonTypeColors[allTypes[0].type.name].medium }}
        >
          <div className='Pokemon-detail-content'>
            <p className='Pokemon-detail-id'>{`#${id}`}</p>
            <div className='Pokemon-detail-content-img'>
              <img alt='Pokeball' src='/img/pokeball.svg' className='Pokeball' />
              <img alt={name} src={img} className='Pokemon-detail-img' />
            </div>
          </div>
          <div className='Pokemon-detail-info'>
            <h1 className='Pokemon-detail-name'>{name}</h1>
            <div className='Pokemon-detail-types'>
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
        <div className='pokemon-data'>
          <h1>Data</h1>
          <p>{flavorText}</p>
          <ul>
            <li>
              <span className='title'>Height</span>
              <span>({(height / 10)}M)</span>
            </li>
            <li>
              <span className='title'>Weight</span>
              <span>({(weight / 10)}Kg)</span>
            </li>
            <li>
              <span className='title'>Abilities</span>
              <span>
                {abilities.map(a => (
                  <span
                    key={a.ability.name}
                    className='pokemon-abilities'
                  >
                    {
                    (a.is_hidden)
                      ? `${a.ability.name} (hidden)`
                      : a.ability.name
                    }
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
        <div className='pokemon-stats'>
          <h1>Stats</h1>
          <ul>
            {stats.map(s => (
              <li key={s.stat.name}>
                <span className='title'>
                  {s.stat.name}
                </span>
                <span className='stat-value'>
                  {s.base_stat}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {
        (evolutions.length === 0)
          ? <></>
          : (
            <div className='pokemon-evolutions'>
              <h1>Evolutions</h1>
              <ul>
                {evolutions.map(evo => {
                  return (
                    <Link className='Pokemon-link' to={`/pokemon/${evo.id}`} key={evo.id}>
                      <li>
                        <span className='title'>{evo.name}</span>
                        <img className='Pokemon-img' src={evo.img} alt={evo.name} />
                      </li>
                    </Link>
                  )
                })}
              </ul>
            </div>
            )
      }
    </div>
  )
};
