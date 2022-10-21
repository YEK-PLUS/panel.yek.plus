import useSWR from "swr";
import { fetcher } from "./fetcher";
import type { Data } from "../pages/api/amazon/category-list";
const useCategoryList = () => {
  const { data, error } = useSWR<Data[]>(
    "/amazon/category-list",
    () => fetcher("/amazon/category-list"),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return { categoryList: data, error, loading: !data && !error };
};

export default useCategoryList;
