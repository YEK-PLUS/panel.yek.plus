import useSwr from "swr";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { post } from "./fetcher";
import Cookies from "universal-cookie";

const useLogin = () => {
  const router = useRouter();
  const token = router.query.token;
  const [error, setError] = useState<string | undefined>("");
  const cookies = useMemo(() => new Cookies(), []);

  const { data } = useSwr(token ? "/user/login" : null, () =>
    post("/login", { token })
  );

  useEffect(() => {
    if (data) {
      if (data.success) {
        cookies.set("token", token, { path: "/" });
        router.push("/");
      } else {
        setError(data.message);
      }
    }
  }, [data, cookies, token, router]);

  return { data, error, loading: !data && !error };
};
export default useLogin;
