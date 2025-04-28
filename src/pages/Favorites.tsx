import PokemonCardContainer from "@components/PokemonCardContainer";
import { selectFavoritePokemon } from "@features/pokemon/pokeSlice";
import { useAppSelector } from "@app/hooks";

const Favorites = () => {
  const favorites = useAppSelector(selectFavoritePokemon);

  return <PokemonCardContainer pokemonData={favorites} />;
};
export default Favorites;
