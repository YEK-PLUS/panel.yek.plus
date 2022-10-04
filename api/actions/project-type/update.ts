import { patch } from "../../fetcher";

const update = (
  id: string,
  projectType: {
    name: string;
    description: string;
  }
) => patch("/admin/project-type/update/" + id, projectType);

export default update;
