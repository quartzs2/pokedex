import FavoriteButton from "@components/FavoriteButton";
import { PokeData } from "@src/types/types";
import { useNavigate } from "react-router";
import { useState, memo } from "react";

const PokemonCardComponent = ({ front, name, id }: PokeData) => {
  const navigate = useNavigate();
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <div
      className="flex w-[160px] flex-col items-center justify-center rounded-lg border-2 border-gray-200 p-4 shadow-md duration-100 hover:scale-110 hover:border-r-red-600 hover:border-b-red-600"
      onClick={() => navigate(`/detail/${id}`)}
      role="button"
      tabIndex={0}
    >
      <FavoriteButton pokemonId={id} />
      <div>
        {isImageLoading ? (
          <div className="h-[96px] w-[96px] text-center leading-[96px]">
            로딩 중입니다.
          </div>
        ) : null}
        <img onLoad={() => setIsImageLoading(false)} src={front} alt={name} />
      </div>
      <div className="font-[NeoDunggeunmo]">{name}</div>
    </div>
  );
};

const PokemonCard = memo(PokemonCardComponent);

export default PokemonCard;
