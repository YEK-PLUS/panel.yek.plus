import { post } from "../../fetcher";

const create = (user: {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  username: string;
}) => post("/admin/user/create", user);

export default create;
