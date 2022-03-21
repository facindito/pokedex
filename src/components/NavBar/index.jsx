import { useState, useCallback } from 'react'
import { Link, useLocation } from 'wouter'
import SearchForm from '../SearchForm'

import './styles.css'
import Generations from '../Generations'

export default function NavBar () {
  const [show, setShow] = useState(false)
  const [, pushLocation] = useLocation()

  const handlerSubmit = useCallback(({ keyword }) => {
    // Navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  }, [pushLocation])

  const handleClick = () => {
    setShow(!show)
  }
  return (
    <nav className='navbar'>
      <Link to='/'>
        <div className='logo'>
          <img src='/img/Logo.svg' alt='' />
        </div>
      </Link>
      <button type='button' className='navbar-toggler' onClick={handleClick}>
        <i className='fa fa-bars navbar-toggler-icon' aria-hidden='true' />
      </button>
      <div className={`navbar-collapse collapse ${show && 'show'}`}>
        <div className='dropdown'>
          <button className='dropbtn'>Generations</button>
          <div className='dropdown-content'>
            <Generations />
          </div>
        </div>
        <SearchForm onSubmit={handlerSubmit} />
      </div>
    </nav>
  )
}
/**
onMouseEnter={() => setOpen(true)}
onMouseLeave={() => setOpen(false)}
**/
