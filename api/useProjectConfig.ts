import useSWR from "swr";
import _ from "lodash";
import { Project } from "../types/project";
import read from "./actions/project/read-config";

const useProjectConfig = (id?: string) => {
  const { data, error, mutate } = useSWR<Project | Project[]>(
    id ? `/api/project/${id}/config` : null,
    () => read(id as string)
  );
  return { data, error, mutate, loading: !data && !error };
};

export default useProjectConfig;
