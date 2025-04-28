import { selectPokemonById } from "@features/pokemon/pokeSlice";
import FavoriteButton from "@components/FavoriteButton";
import { useAppSelector } from "@app/hooks";
import { PokeData } from "@src/types/types";
import { useParams } from "react-router";

const Detail = () => {
  const { pokemonId } = useParams();
  const pokemon = useAppSelector(selectPokemonById(Number(pokemonId))) as
    | undefined
    | PokeData;

  if (!pokemon) {
    return <div>Pokemon not found</div>;
  }

  return (
    <div className="mx-auto flex w-fit flex-col items-center justify-center gap-4 rounded-2xl border-2 border-gray-200 p-4">
      <div className="flex w-full items-center justify-between text-2xl">
        {pokemon.name} <FavoriteButton pokemonId={Number(pokemonId)} />
      </div>
      <div className="w-full text-left whitespace-pre-wrap">
        <div>{pokemon.description}</div>
      </div>
      <img
        className="aspect-square w-[200px]"
        src={pokemon.front}
        alt={pokemon.name}
      />
    </div>
  );
};
export default Detail;
