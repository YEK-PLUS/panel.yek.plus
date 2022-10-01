import { _delete } from "../../fetcher";

const removeUser = (id: string, userIds: string[]) =>
  _delete("/admin/project/remove-user/" + id, {
    userIds,
  });

export default removeUser;
