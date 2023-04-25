import platforms from "../data/platforms";
import apiClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const fetchPlatforms = () =>
    apiClient
      .get<FetchResponse<Platform>>("/platforms")
      .then((res) => res.data.results);

  return useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: platforms,
  });
};

export default usePlatforms;
