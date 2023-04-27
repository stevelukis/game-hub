import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Game {
  id: string;
  slug: string;
  name: string;
  description_raw: string;
}

const gameService = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => gameService.get(slug),
  });

export default useGame;
