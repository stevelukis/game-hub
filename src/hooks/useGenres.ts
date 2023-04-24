import { FetchResponse } from "./useData";
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

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
  });
};

export default useGenres;
