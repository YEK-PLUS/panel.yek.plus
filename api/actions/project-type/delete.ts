import { _delete } from "../../fetcher";

const __delete = (id: string) => _delete("/admin/project-type/delete/" + id);

export default __delete;
