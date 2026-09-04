interface Pokemon {
  name: string;
  imgSrc?: string;
}

function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
    </figure>
  );
}

export default PokemonCard;
