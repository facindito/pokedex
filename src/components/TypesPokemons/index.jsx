import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import getTypes from '../../services/getTypes'

import './styles.css'

export default function TypesPokemons () {
  const [types, setTypes] = useState([])

  useEffect(async () => {
    await getTypes().then(setTypes)
  }, [])
  return (
    <>
      <ul className='Type-list'>
        {types.map((type) => (
          <li key={type.name} className={'Type-list-item ' + type.name}>
            <Link className='Type-link' to={`/type/${type.name}`}>
              {type.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
};
