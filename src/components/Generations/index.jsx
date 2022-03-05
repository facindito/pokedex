import { useEffect, useState } from 'react'
import ActiveLink from '../ActiveLink'
import getGenerations from '../../services/getGenerations'
import './style.css'

export default function Generations () {
  const [generations, setGenerations] = useState([])

  useEffect(async () => {
    await getGenerations().then(setGenerations)
  }, [])
  return (
    <>
      <ul className='Generations-list'>
        {generations.map((g, index) => (
          <li key={g.name} className={'Generations-list-item ' + g.name}>
            <ActiveLink className='Generations-link' href={`/generation/${index + 1}/`}>
              Generation {index + 1}
            </ActiveLink>
          </li>
        ))}
      </ul>
    </>
  )
};
