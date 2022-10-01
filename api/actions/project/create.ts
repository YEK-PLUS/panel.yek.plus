import { post } from "../../fetcher";

const create = (project: {
  email: string;
  name: string;
  description: string;
}) => post("/admin/project/create", project);

export default create;
