import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../data/mock";

const pokemonData = MOCK_DATA;

const Dex = () => {
  return (
    <div>
      <h1>포켓몬 도감</h1>
      <h3>선택된 포켓몬들이 나타납니다</h3>
      <Dashboard />
      <hr />
      <PokemonList pokemonData={pokemonData} />
    </div>
  );
};

export default Dex;
