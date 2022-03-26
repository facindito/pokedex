import PokemonDetailCard from '../components/PokemonDetails'
import Spinner from '../components/Spinner'
import usePokemonInfo from '../hooks/usePokemonInfo'

export default function Detail ({ params }) {
  const { id } = params
  const { pokemon, loading } = usePokemonInfo({ id })

  const {
    abilities,
    allTypes,
    evolutions,
    flavorText,
    height,
    img,
    name,
    species,
    stats,
    weight
  } = pokemon

  if (!pokemon) { return (<Spinner />) }
  return (
    <>
      {
        loading
          ? <Spinner />
          : <PokemonDetailCard
              abilities={abilities}
              allTypes={allTypes}
              evolutions={evolutions}
              flavorText={flavorText}
              height={height}
              id={id}
              img={img}
              key={id}
              name={name}
              species={species}
              stats={stats}
              weight={weight}
            />
      }
    </>
  )
};
