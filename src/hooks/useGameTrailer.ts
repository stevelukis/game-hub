import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { GameTrailer } from "../entities/GameTrailer";

const useGameTrailer = (slug: string) => {
  const gameTrailerService = new APIClient<GameTrailer>(
    `/games/${slug}/movies`
  );
  return useQuery({
    queryKey: ["game-trailer", slug],
    queryFn: () => gameTrailerService.getAll(),
  });
};

export default useGameTrailer;
