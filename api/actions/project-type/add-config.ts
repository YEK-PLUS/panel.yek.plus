import { ProjectTypeConfigType } from "../../../types/project-type";
import { post } from "../../fetcher";

const addConfig = (
  id: string,
  projectType: {
    key: string;
    label: string;
    editable: boolean;
    type: ProjectTypeConfigType;
  }
) =>
  post("/admin/project-type/add-config/" + id, {
    key: projectType.key,
    label: projectType.label,
    editable: projectType.editable,
    type: projectType.type,
  });

export default addConfig;
