import useSWR from "swr";
import { fetcher } from "./fetcher";
import type { Data } from "../pages/api/amazon/history";
const useHistory = () => {
  const { data, error } = useSWR<Data>("/amazon/history/", () =>
    fetcher("/amazon/history")
  );
  return { data, error, loading: !data && !error };
};

export default useHistory;
