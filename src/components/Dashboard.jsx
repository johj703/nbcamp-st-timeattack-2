const Dashboard = ({ selectedPokemon }) => {
  return (
    <div>
      <h2>대시보드</h2>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <ul>
          {selectedPokemon.map((pokemon) => {
            <li key={pokemon.id}>{pokemon.korean_name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
