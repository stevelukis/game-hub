import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Platform from "../entities/Platform";

const platformService = new APIClient<Platform>("/platforms");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: ms("24 hours"), // 24 hours
    initialData: { count: platforms.length, results: platforms, next: null },
  });
};

export default usePlatforms;
