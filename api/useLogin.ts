import useSwr from "swr";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { post } from "./fetcher";
import Cookies from "universal-cookie";

const useLogin = () => {
  const [token, setToken] = useState<string | undefined>("");
  const router = useRouter();
  const [error, setError] = useState<string | undefined>("");
  const cookies = useMemo(() => new Cookies(), []);
  useEffect(() => {
    const queryToken = router.query.token;
    if (queryToken) {
      setToken(Array.isArray(queryToken) ? queryToken[0] : queryToken);
    } else {
      setError("No token found");
    }
  }, [router]);
  const { data } = useSwr(token ? "/user/login" : null, () =>
    post("/login", { token })
  );

  useEffect(() => {
    if (data) {
      if (data.success) {
        cookies.set("token", token, { path: "/" });
        router.prefetch("/").then(() => router.push("/"));
      } else {
        setError(data.message);
      }
    }
  }, [data, cookies, token, router]);

  return { data, error, loading: !data && !error };
};
export default useLogin;
