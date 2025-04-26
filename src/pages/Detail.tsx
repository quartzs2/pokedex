import { selectPokemonById } from "@features/pokemon/pokeSlice";
import { useAppSelector } from "@app/hooks";
import { useParams } from "react-router";
import { PokeData } from "@/types/types";

const Detail = () => {
  const { pokemonId } = useParams();
  const pokemon = useAppSelector(selectPokemonById(Number(pokemonId))) as
    | undefined
    | PokeData;

  if (!pokemon) {
    return <div>Pokemon not found</div>;
  }

  return (
    <div className="mx-auto flex w-fit flex-col items-center justify-center rounded-2xl border-2 border-gray-200 p-4">
      <div className="text-2xl">{pokemon.name}</div>
      <div className="text-center whitespace-pre-wrap">
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
