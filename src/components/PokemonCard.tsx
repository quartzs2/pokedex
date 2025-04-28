import FavoriteButton from "@components/FavoriteButton";
import { PokeData } from "@src/types/types";
import { useNavigate } from "react-router";

const PokemonCard = ({ front, name, back, id }: PokeData) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex w-[160px] flex-col items-center justify-center rounded-lg border-2 border-gray-200 p-4 shadow-md duration-100 hover:scale-110 hover:border-r-red-600 hover:border-b-red-600"
      onClick={() => navigate(`/detail/${id}`)}
      role="button"
      tabIndex={0}
    >
      <FavoriteButton pokemonId={id} />
      <div>
        <img src={front} alt={name} />
        <img className="hidden" src={back} alt={name} />
      </div>
      <div className="font-[NeoDunggeunmo]">{name}</div>
    </div>
  );
};
export default PokemonCard;
