import Cookies from "universal-cookie";

type Fetcher = (url: string, data?: any) => Promise<any>;

export const fetcher: Fetcher = async (url) => {
  const cookies = new Cookies();
  const res = await fetch("/api" + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `token=${cookies.get("token")}`,
    },
  });
  if (res.status === 401) {
    window.location.href = "/not-authorized";
  }
  return await res.json();
};
export const post: Fetcher = async (url, data) => {
  const cookies = new Cookies();
  const res = await fetch("/api" + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `token=${cookies.get("token")}`,
    },
    body: JSON.stringify(data),
  });
  if (res.status === 401) {
    window.location.href = "/not-authorized";
  }
  return await res.json();
};
export const get: Fetcher = async (url, data) => {
  const cookies = new Cookies();
  const res = await fetch("/api" + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `token=${cookies.get("token")}`,
    },
    body: JSON.stringify(data),
  });
  if (res.status === 401) {
    window.location.href = "/not-authorized";
  }
  return await res.json();
};
export const _delete: Fetcher = async (url, data) => {
  const cookies = new Cookies();
  const res = await fetch("/api" + url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Cookie: `token=${cookies.get("token")}`,
    },
    body: JSON.stringify(data),
  });
  if (res.status === 401) {
    window.location.href = "/not-authorized";
  }
  return await res.json();
};
export const patch: Fetcher = async (url, data) => {
  const cookies = new Cookies();
  const res = await fetch("/api" + url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: `token=${cookies.get("token")}`,
    },
    body: JSON.stringify(data),
  });
  if (res.status === 401) {
    window.location.href = "/not-authorized";
  }
  return await res.json();
};
