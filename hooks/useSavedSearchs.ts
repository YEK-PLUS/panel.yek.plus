import useSWR from "swr";
import { fetcher } from "./fetcher";
import type { Data } from "../pages/api/amazon/saved-search";
const useSavedSearch = () => {
  const { data, error, mutate } = useSWR<Data>("/amazon/saved-search/", () =>
    fetcher("/amazon/saved-search")
  );
  return { data, error, loading: !data && !error, mutate };
};

export default useSavedSearch;
