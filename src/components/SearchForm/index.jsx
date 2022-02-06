import React, { useState } from 'react'
import './style.css'
function SearchForm ({ onSubmit }) {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = evt => {
    // No olvidar
    evt.preventDefault()
    // navegar a otra ruta
    onSubmit({ keyword })
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input type='text' className='Search' onChange={handleChange} value={keyword} />
      <button type='submit' className='btn'>
        Buscar
      </button>
    </form>
  )
}

export default React.memo(SearchForm)
