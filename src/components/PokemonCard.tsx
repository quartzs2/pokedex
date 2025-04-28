import FavoriteButton from "@components/FavoriteButton";
import { PokeData } from "@src/types/types";
import { useNavigate } from "react-router";

const PokemonCard = ({ front, name, back, id }: PokeData) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex w-[160px] flex-col items-center justify-center rounded-lg border-2 border-gray-200 p-4"
      onClick={() => navigate(`/detail/${id}`)}
      role="button"
      tabIndex={0}
    >
      <FavoriteButton pokemonId={id} />
      <div>
        <img src={front} alt={name} />
        <img className="hidden" src={back} alt={name} />
      </div>
      <div>{name}</div>
    </div>
  );
};
export default PokemonCard;
