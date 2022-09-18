import useSWR from "swr";
import { Data } from "../pages/api/games";
import { post } from "./fetcher";

const useGames = () => {
  const { data, error } = useSWR<Data>("/games", () => post("/games"));
  return { data, error, loading: !data && !error };
};

export default useGames;
