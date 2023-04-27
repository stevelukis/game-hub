import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";

const useTrailer = (slug: string) => {
  const gameTrailerService = new APIClient<Trailer>(`/games/${slug}/movies`);
  return useQuery({
    queryKey: ["game-trailer", slug],
    queryFn: () => gameTrailerService.getAll(),
  });
};

export default useTrailer;
