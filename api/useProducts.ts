import useSWR from "swr";
import { fetcher } from "./fetcher";
import type { Data } from "../pages/api/amazon/products";
const useProducts = () => {
  const { data, error, mutate } = useSWR<Data>("/amazon/products/", () =>
    fetcher("/amazon/products")
  );
  return { data, error, loading: !data && !error, mutate };
};

export default useProducts;
