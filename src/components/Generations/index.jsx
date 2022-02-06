import { useEffect, useState } from 'react'
import { Link } from 'wouter'
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
            <Link className='Generations-link' to={`/generacion_${index + 1}`}>
              Generacion {index + 1}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
};
