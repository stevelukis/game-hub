import platforms from "../data/platforms";
import ApiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const platformService = new ApiClient<Platform>("/platforms");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
