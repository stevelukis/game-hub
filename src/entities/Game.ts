import { Platform } from "./Platform";
import { Publisher } from "./Publisher";
import { Genre } from "./Genre";

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  description_raw?: string;
  publishers: Publisher[];
  genres: Genre[];
}