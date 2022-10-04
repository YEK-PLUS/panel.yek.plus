import { post } from "../../fetcher";

const create = (project: {
  name: string;
  description: string;
}) => post("/admin/project-type/create", project);

export default create;
