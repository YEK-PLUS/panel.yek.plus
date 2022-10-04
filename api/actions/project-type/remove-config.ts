import { _delete } from "../../fetcher";

const removeConfig = (id: string, configIds: string[]) =>
  _delete("/admin/project-type/remove-config/" + id, {
    configIds,
  });

export default removeConfig;
