const PokemonCard = ({ pokemon }) => {
  return (
    <div>
      <img src={"pokemon.img_url"} alt={"포켓몬 이미지"} />
      <p>{pokemon.korean_name}</p>
      <button>삭제</button>
      <button>추가</button>
    </div>
  );
};

export default PokemonCard;
