import { get } from "../../fetcher";

const read = (id?: string) => get("/admin/project/read" + (id ? "/" + id : ""));

export default read;
