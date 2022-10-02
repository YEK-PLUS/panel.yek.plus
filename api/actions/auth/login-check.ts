import { post } from "../../fetcher";

const loginCheck = () => post("/admin/auth/login/check");

export default loginCheck;
