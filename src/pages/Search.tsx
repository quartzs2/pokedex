import { selectPokemonByRegexp } from "@features/pokemon/pokeSlice";
import PokemonCardContainer from "@components/PokemonCardContainer";
import { useSearchParams } from "react-router";
import { useAppSelector } from "@app/hooks";
import { getRegExp } from "korean-regexp";

const Search = () => {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("pokemon") ?? "";
  const reg = getRegExp(param);
  const pokemonData = useAppSelector(selectPokemonByRegexp(reg));

  return <PokemonCardContainer pokemonData={pokemonData} />;
};
export default Search;
