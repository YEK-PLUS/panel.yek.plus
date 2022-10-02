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
      Authorization: `Bearer ${cookies.get("token")}`,
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
      Authorization: `Bearer ${cookies.get("token")}`,
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};
export const get: Fetcher = async (url, data) => {
  const cookies = new Cookies();
  const res = await fetch(API_URL + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.get("token")}`,
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};
export const _delete: Fetcher = async (url, data) => {
  const cookies = new Cookies();
  const res = await fetch(API_URL + url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.get("token")}`,
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};
export const patch: Fetcher = async (url, data) => {
  const cookies = new Cookies();
  const res = await fetch(API_URL + url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.get("token")}`,
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};
