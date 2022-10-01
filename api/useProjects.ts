import useSWR from "swr";
import _ from "lodash";
import { Project } from "../types/project";
import read from "./actions/project/read";

const useProjects = (id?: string | null) => {
  const { data, error, mutate } = useSWR<Project | Project[]>(
    _.isNull(id) ? null : _.isUndefined(id) ? "/api/project" : `/api/project/${id}`,
    () => read(id as string)
  );
  return { data, error, mutate, loading: !data && !error };
};

export default useProjects;
