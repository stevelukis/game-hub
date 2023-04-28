import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ms from "ms";
import Genre from "../entities/Genre";

const genreService = new APIClient<Genre>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: ms("24 hours"),
    initialData: { count: genres.length, results: genres, next: null },
  });
};

export default useGenres;
