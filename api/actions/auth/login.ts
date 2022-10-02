import { post } from "../../fetcher";

const login = (email: string, password: string) =>
  post("/admin/auth/login", { email, password });

export default login;
