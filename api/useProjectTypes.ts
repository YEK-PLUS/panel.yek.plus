import useSWR from "swr";
import _ from "lodash";
import read from "./actions/project-type/read";
import { ProjectType } from "../types/project-type";

const useProjectTypes = (id?: string | null) => {
  const { data, error, mutate } = useSWR<ProjectType | ProjectType[]>(
    _.isNull(id)
      ? null
      : _.isUndefined(id)
      ? "/api/project-type"
      : `/api/project-type/${id}`,
    () => read(id as string)
  );
  return { data, error, mutate, loading: !data && !error };
};

export default useProjectTypes;
