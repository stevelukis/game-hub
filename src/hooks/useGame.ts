import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "../services/gameService";

const gameService = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => gameService.get(slug),
  });

export default useGame;
