import { useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

import { fetcher } from "./fetcher";
import loginCheck from "./actions/auth/login-check";

const useAuth = () => {
  const router = useRouter();
  const { data, error } = useSWR("/user/auth", loginCheck);
  useEffect(() => {
    console.log(data);
    
    if (data && data.error) {
      router.push("/login");
    }
  }, [data, router]);

  return { data, error, loading: !data && !error };
};

export default useAuth;
