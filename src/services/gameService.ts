import APIClient from "./api-client";
import { Platform } from "../hooks/usePlatforms";

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  description_raw?: string;
}

const gameService = new APIClient<Game>("/games");

export default gameService;
