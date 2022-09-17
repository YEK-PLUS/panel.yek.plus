import useSwr from "swr";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { API_URL },
}: {
  publicRuntimeConfig: { API_URL: string };
} = getConfig();

const useLogin = () => {
  const [token, setToken] = useState<string | undefined>("");
  const router = useRouter();
  const cookies = useMemo(() => new Cookies(), []);
  const [error, setError] = useState<string | undefined>("");
  useEffect(() => {
    const queryToken = router.query.token;
    if (queryToken) {
      setToken(Array.isArray(queryToken) ? queryToken[0] : queryToken);
    } else {
      setError("No token found");
    }
  }, [router]);
  const { data } = useSwr(token ? "/user/login" : null, () =>
    fetch(API_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    }).then((r) => r.json())
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
