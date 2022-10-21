import useSWR from "swr";
import { post } from "./fetcher";
import type { Data } from "../pages/api/amazon/search";
const useSearch = (query?: string) => {
  const { data, error, mutate } = useSWR<Data>(
    query ? "/amazon/search/" + query : null,
    () => post("/amazon/search", { query }),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return { data, error, loading: !data && !error, mutate };
};

export default useSearch;
