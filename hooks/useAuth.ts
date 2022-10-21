import { useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

import { fetcher } from "./fetcher";

const useAuth = () => {
  const router = useRouter();
  const { data, error } = useSWR("/user/auth", () => fetcher(""));
  useEffect(() => {
    if (data && !data.success) {
      router.push("/not-authorized");
    }
  }, [data, router]);

  return { data, error, loading: !data && !error };
};

export default useAuth;
