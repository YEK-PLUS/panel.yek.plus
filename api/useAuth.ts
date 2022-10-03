import { useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

import { fetcher } from "./fetcher";
import loginCheck from "./actions/auth/login-check";

const useAuth = () => {
  const router = useRouter();
  const { data } = useSWR("/user/auth", loginCheck);
  const error = data?.error;
  useEffect(() => {
    if (data && data.error) {
      router.push("/login");
    }
  }, [data, router]);

  return { data, error, loading: !data && !error };
};

export default useAuth;
