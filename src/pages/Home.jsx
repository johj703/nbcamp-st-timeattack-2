import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const StartDex = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>포켓몬 도감 대문</h1>
      <button onClick={StartDex}>포켓몬 도감 시작하기</button>
    </div>
  );
};

export default Home;
