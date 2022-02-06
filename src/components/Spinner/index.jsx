import React from 'react'
import './style.css'

export default function Spinner () {
  return (
    <div className='spinner-content'>
      <div className='spinner'>
        <img alt='Pokeball' src='/img/spinner.svg' className='pokeball' />
      </div>
    </div>

  )
};
