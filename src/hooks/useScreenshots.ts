import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Screenshot } from "../entities/Screenshot";

const useScreenshots = (slug: string) => {
  const service = new APIClient<Screenshot>(`/games/${slug}/screenshots`);
  return useQuery({
    queryKey: ["screenshot", slug],
    queryFn: service.getAll,
  });
};

export default useScreenshots;
