/* eslint-disable react/prop-types */
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonData }) => {
  console.log(pokemonData);
  return (
    <div>
      {PokemonList.map((pokemon) => {
        <PokemonCard
          key={pokemon.id}
          pokemon={{}}
          onAdd={() => {}}
          isSelected={false}
        />;
      })}
    </div>
  );
};

export default PokemonList;
