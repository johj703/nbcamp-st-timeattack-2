import PokemonCard from "./PokemonCard";

const PokemonList = () => {
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
