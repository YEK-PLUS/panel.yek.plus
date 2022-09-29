import { patch } from "../../fetcher";

const updatePassword = (
  id: string,
  user: {
    password: string;
  }
) => patch("/admin/user/update/" + id + "/password", user);

export default updatePassword;
