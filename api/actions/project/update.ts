import { patch } from "../../fetcher";

const update = (
  id: string,
  project: {
    name: string;
    description: string;
    email: string;
  }
) => patch("/admin/project/update/" + id, project);

export default update;
