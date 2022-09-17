import { useEffect, useMemo, useState } from "react";
import getConfig from "next/config";
import Cookies from "universal-cookie";
import useSWR from "swr";
import { useRouter } from "next/router";

const {
  publicRuntimeConfig: { API_URL },
}: {
  publicRuntimeConfig: { API_URL: string };
} = getConfig();

const useAuth = () => {
  const cookies = useMemo(() => new Cookies(), []);
  const router = useRouter();
  const { data, error } = useSWR("/user/auth", (url) =>
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `token=${cookies.get("token")}`,
      },
    }).then((r) => r.json())
  );
  useEffect(() => {
    if (data && !data.success) {
      router.prefetch("/auth").then(() => router.push("/auth"));
    }
  }, [data, router]);

  return { data, error, loading: !data && !error };
};

export default useAuth;
