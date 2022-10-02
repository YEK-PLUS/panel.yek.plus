import { post } from "../../fetcher";

const loginCheck = () => post("/client/auth/login/check");

export default loginCheck;
