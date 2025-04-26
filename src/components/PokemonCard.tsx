import { useNavigate } from "react-router";
import { PokeData } from "@/types/types";

const PokemonCard = ({ front, name, back, id }: PokeData) => {
  const navigate = useNavigate();

  return (
    <button
      className="flex w-[160px] flex-col items-center justify-center rounded-lg border-2 border-gray-200 p-4"
      onClick={() => navigate(`/detail/${id}`)}
      type="button"
    >
      <div>
        <img src={front} alt={name} />
        <img className="hidden" src={back} alt={name} />
      </div>
      <div>{name}</div>
    </button>
  );
};
export default PokemonCard;
