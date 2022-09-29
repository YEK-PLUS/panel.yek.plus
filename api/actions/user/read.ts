import { get } from "../../fetcher";

const read = (id?: string) => get("/admin/user/read" + (id ? "/" + id : ""));

export default read;
