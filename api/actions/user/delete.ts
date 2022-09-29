import { _delete } from "../../fetcher";

const __delete = (id: string) => _delete("/admin/user/delete/" + id);

export default __delete;
