import PokemonDetailCard from '../components/PokemonDetails'
import Spinner from '../components/Spinner'
import usePokemonInfo from '../hooks/usePokemonInfo'

export default function Detail ({ params }) {
  const { id } = params
  const { pokemon, loading } = usePokemonInfo({ id })

  const { name, img, allTypes, height, weight, stats, species, evolutions, flavorText, abilities } = pokemon
  if (!pokemon) { return (<Spinner />) }
  return (
    <>
      {
        loading
          ? <Spinner />
          : <PokemonDetailCard
              name={name}
              key={id}
              img={img}
              allTypes={allTypes}
              id={id}
              height={height}
              weight={weight}
              stats={stats}
              species={species}
              evolutions={evolutions}
              flavorText={flavorText}
              abilities={abilities}
            />
      }
    </>
  )
};
