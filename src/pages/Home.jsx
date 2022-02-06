import Spinner from '../components/Spinner'
import ListOfPokemons from '../components/ListOfPokemons'
import { usePokemons } from '../hooks/usePokemons'

export default function Home () {
  const { pokemons, loading } = usePokemons()
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
