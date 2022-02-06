import ListOfPokemons from '../components/ListOfPokemons'
import { useGenerations } from '../hooks/useGenerations'
import Spinner from '../components/Spinner'

export default function Generations ({ params }) {
  const { generation } = params
  const { pokemons, loading } = useGenerations({ generation })
  return (
    <>
      {
        loading
          ? <Spinner />
          : <>
            <div className='App-Results'>
              <ListOfPokemons pokemons={pokemons} />
            </div>
          </>
      }
    </>
  )
};
