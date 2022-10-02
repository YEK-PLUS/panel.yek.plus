import { post } from "../../fetcher";

const login = (email: string, password: string) =>
  post("/client/auth/login", { email, password });

export default login;
