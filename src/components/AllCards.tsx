import PokemonCardContainer from "@components/PokemonCardContainer";
import { useAppSelector } from "@app/hooks";

const AllCards = () => {
  const pokemonData = useAppSelector((state) => state.pokemon);

  if (pokemonData.loading) {
    return <div>로딩중</div>;
  }

  return <PokemonCardContainer pokemonData={pokemonData.data} />;
};
export default AllCards;
