import apiClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => ({ data: genres, isLoading: false, error: null })
const useGenres = () => {
  const fetchGenres = () =>
    apiClient
      .get<FetchResponse<Genre>>("/genres")
      .then((res) => res.data.results);

  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 60 * 60 * 1000, // 1 hour
    initialData: genres,
  });
};

export default useGenres;
