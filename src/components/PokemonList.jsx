import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonData }) => {
  console.log(pokemonData);
  return (
    <div>
      {pokemonData.map((pokemon) => {
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={() => {}}
          isSelected={false}
        />;
      })}
    </div>
  );
};

export default PokemonList;
