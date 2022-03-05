import { useContext } from 'react'
import ListOfPokemons from '../components/ListOfPokemons'
import TypesPokemons from '../components/TypesPokemons'
import PokemonContext from '../context/pokeContext'
import { useGenerations } from '../hooks/useGenerations'
import { useTypePokemons } from '../hooks/useTypePokemons'

export default function Generations ({ params }) {
  const { id } = params
  const { pokemonsFilter } = useGenerations({ id })
  const { typeSelect } = useContext(PokemonContext)
  const { typesFilter } = useTypePokemons({ type: typeSelect })

  console.log(typesFilter)
  return (
    <>
      <div className='App-Results'>
        <div>
          <TypesPokemons />
          {
            (typesFilter.length !== 0)
              ? <ListOfPokemons pokemons={typesFilter} />
              : <ListOfPokemons pokemons={pokemonsFilter} />
          }
        </div>
      </div>
    </>
  )
};
