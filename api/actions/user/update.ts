import { patch } from "../../fetcher";

const update = (
  id: string,
  user: {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
  }
) => patch("/admin/user/update/" + id, user);

export default update;
