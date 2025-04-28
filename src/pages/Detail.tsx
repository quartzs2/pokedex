import { selectPokemonById } from "@features/pokemon/pokeSlice";
import FavoriteButton from "@components/FavoriteButton";
import { useEffect, useState, useRef } from "react";
import { useAppSelector } from "@app/hooks";
import { PokeData } from "@src/types/types";
import { useParams } from "react-router";
import clsx from "clsx";

const Detail = () => {
  const imgDivRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const element = imgDivRef.current;

    const handleMouseEnter = () => {
      setFlipped(true);
    };
    const handleMouseLeave = () => {
      setFlipped(false);
    };

    if (element !== null) {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (element === null) return;

      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const { pokemonId } = useParams();
  const pokemon = useAppSelector(selectPokemonById(Number(pokemonId))) as
    | undefined
    | PokeData;

  if (!pokemon) {
    return <div>Pokemon not found</div>;
  }

  return (
    <div className="mx-auto flex w-fit flex-col items-center justify-center gap-4 rounded-2xl border-2 border-gray-200 p-4 transform-3d">
      <div className="flex w-full items-center justify-between text-2xl">
        {pokemon.name} <FavoriteButton pokemonId={Number(pokemonId)} />
      </div>
      <div className="w-full text-left whitespace-pre-wrap">
        <div>{pokemon.description}</div>
      </div>
      <div className="relative h-[200px] w-[200px]" ref={imgDivRef}>
        <img
          className={clsx(
            "absolute top-0 left-0 aspect-square w-[200px] duration-300 backface-hidden",
            { "rotate-y-180": flipped },
          )}
          src={pokemon.front}
          alt={pokemon.name}
        />
        <img
          className={clsx(
            "absolute top-0 left-0 aspect-square w-[200px] duration-300 backface-hidden",
            { "rotate-y-180": !flipped },
          )}
          src={pokemon.back}
          alt={pokemon.name}
        />
      </div>
    </div>
  );
};
export default Detail;
