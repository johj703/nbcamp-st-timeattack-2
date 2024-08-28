import PokemonCard from "./PokemonCard";

const Dashboard = ({ selectedPokemon, pokemon }) => {
  return (
    <div>
      <h2>대시보드</h2>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={() => {}}
          isSelected={true}
        />
      )}
    </div>
  );
};

export default Dashboard;
