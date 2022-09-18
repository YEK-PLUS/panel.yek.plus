import { useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

import { fetcher } from "./fetcher";

const useAuth = () => {
  const router = useRouter();
  const { data, error } = useSWR("/user/auth", () => fetcher(""));
  useEffect(() => {
    if (data && !data.success) {
      router.prefetch("/auth").then(() => router.push("/auth"));
    }
  }, [data, router]);

  return { data, error, loading: !data && !error };
};

export default useAuth;
