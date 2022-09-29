import useSWR from "swr";
import _ from "lodash";
import { User } from "../types/user";
import read from "./actions/user/read";

const useUsers = (id?: string | null) => {
  const { data, error, mutate } = useSWR<User | User[]>(
    _.isNull(id) ? null : _.isUndefined(id) ? "/api/user" : `/api/user/${id}`,
    () => read(id as string)
  );
  return { data, error, mutate, loading: !data && !error };
};

export default useUsers;
