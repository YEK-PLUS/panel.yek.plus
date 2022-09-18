import getConfig from "next/config";
import Cookies from "universal-cookie";

const {
  publicRuntimeConfig: { API_URL },
}: {
  publicRuntimeConfig: { API_URL: string };
} = getConfig();

type Fetcher = (url: string, data?: any) => Promise<any>;

export const fetcher: Fetcher = async (url) => {
  const cookies = new Cookies();
  const res = await fetch(API_URL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `token=${cookies.get("token")}`,
    },
  });
  return await res.json();
};
export const post: Fetcher = async (url, data) => {
  const cookies = new Cookies();
  const res = await fetch(API_URL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `token=${cookies.get("token")}`,
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};