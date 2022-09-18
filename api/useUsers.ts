import useSWR from "swr";
import { Data } from "../pages/api/users";
import { post } from "./fetcher";


const useUsers = () => {
  const { data, error } = useSWR<Data>("/users", () => post("/users"));

  return { data, error, loading: !data && !error };
};

export default useUsers;
