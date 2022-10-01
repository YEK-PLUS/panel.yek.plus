import { post } from "../../fetcher";

const addUser = (id: string, userIds: string[]) =>
  post("/admin/project/add-user/" + id, {
    userIds,
  });

export default addUser;
