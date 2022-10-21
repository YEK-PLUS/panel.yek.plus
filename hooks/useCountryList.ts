import useSWR from "swr";
import { fetcher } from "./fetcher";
import type { Data } from "../pages/api/amazon/country-list";
const useCountryList = () => {
  const { data, error } = useSWR<Data[]>(
    "/amazon/country-list",
    () => fetcher("/amazon/country-list"),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return { countryList: error ? [] : data, error, loading: !data && !error };
};

export default useCountryList;
