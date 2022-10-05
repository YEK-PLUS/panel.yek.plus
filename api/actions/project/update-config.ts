import { post } from "../../fetcher";

const updateConfig = (id: string, configId: string, value: string) =>
  post("/admin/project/update-config/" + id, {
    configId,
    value,
  });

export default updateConfig;
