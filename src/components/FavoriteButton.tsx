import { favoriteSlice } from "@features/favorite/favoriteSlice";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

interface FavoriteButtonProps {
  pokemonId: number;
}

const FavoriteButton = ({ pokemonId }: FavoriteButtonProps) => {
  const isFavorite = useAppSelector((state) =>
    state.favorite.some((item) => item === pokemonId),
  );

  const dispatch = useAppDispatch();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        dispatch(
          isFavorite
            ? favoriteSlice.actions.removeFromFavorite(pokemonId)
            : favoriteSlice.actions.addToFavorite(pokemonId),
        );
      }}
      type="button"
    >
      {isFavorite ? <IoMdHeart /> : <IoMdHeartEmpty />}
    </button>
  );
};

export default FavoriteButton;
