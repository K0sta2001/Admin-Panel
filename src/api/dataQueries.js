import { useQuery } from "react-query";
import { fetchData } from "./api";

export function useData() {
  return useQuery("data", fetchData, {
    staleTime: 5 * 60 * 1000,
    keepPreviousData: true,
  });
}
