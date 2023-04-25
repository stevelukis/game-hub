import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const useData = <T>(
  queryKey: any[],
  endpoint: string,
  requestConfig?: AxiosRequestConfig
) => {
  return useQuery<FetchResponse<T>, Error>({
    queryKey: queryKey,
    queryFn: () =>
      apiClient
        .get<FetchResponse<T>>(endpoint, { ...requestConfig })
        .then((res) => res.data),
  });
};

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default useData;
