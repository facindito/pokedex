import ListOfPokemons from '../components/ListOfPokemons'
import { useTypePokemons } from '../hooks/useTypePokemons'

export default function Types ({ params }) {
  const { type } = params
  const { typesFilter } = useTypePokemons({ type })
  return (
    <>
      <div className='App-Results'>
        <ListOfPokemons pokemons={typesFilter} />
      </div>
    </>
  )
};
