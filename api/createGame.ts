import getConfig from "next/config";
import Cookies from "universal-cookie";

const {
  publicRuntimeConfig: { API_URL },
}: {
  publicRuntimeConfig: { API_URL: string };
} = getConfig();

type ICreateGame = {
  title: string;
  startTime: string;
  endTime: string;
  code?: string;
  prize: string;
  maxTry: number;
};

const createGame = async (data: ICreateGame) => {
  const cookies = new Cookies();

  return fetch(API_URL + "/games/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `token=${cookies.get("token")}`,
    },
    body: JSON.stringify(data),
  }).then((r) => r.json());
};

export default createGame;
