import { get } from "../../fetcher";

const read = (id?: string) => get("/admin/project-type/read" + (id ? "/" + id : ""));

export default read;
