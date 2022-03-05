import { useEffect, useState, useContext } from 'react'
import getTypes from '../../services/getTypes'
import { PokemonTypeColors } from '../../assets/typeColors'
import PokemonContext from '../../context/pokeContext'

import './styles.css'

export default function TypesPokemons () {
  const [types, setTypes] = useState([])
  const [active, setActive] = useState(false)
  const { typeSelect, setTypeSelect } = useContext(PokemonContext)

  useEffect(async () => {
    await getTypes().then(setTypes)
  }, [])

  const handleClick = (e) => {
    if (e.target.textContent === 'all') {
      setTypeSelect(e.target.textContent)
      setActive(false)
    } else {
      setActive(true)
      setTypeSelect(e.target.textContent)
    }
  }
  return (
    <div className='Type'>
      <ul className='Type-list'>
        {types.map((type) => (
          <li
            key={type.name}
            className='Type-list-item'
            onClick={handleClick}
          >
            <button className='Type-btn'>
              {
              (active && typeSelect === type.name)
                ? (
                  <span
                    className='Type-name'
                    style={{ backgroundColor: PokemonTypeColors[type.name].medium, color: '#fff' }}
                  >
                    {type.name}
                  </span>
                  )
                : (
                  <span
                    className='Type-name'
                    style={{ color: PokemonTypeColors[type.name].medium }}
                  >
                    {type.name}
                  </span>
                  )
            }
            </button>
          </li>
        ))}
        <li className='Type-list-item' onClick={handleClick}>
          <button className='Type-btn'>
            <span className='Type-name'>
              All
            </span>
          </button>
        </li>
      </ul>
    </div>
  )
};
