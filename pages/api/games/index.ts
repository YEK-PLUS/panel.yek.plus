import type { NextApiRequest, NextApiResponse } from "next";
import { withJWT } from "../../../middlewares/withJWT";
import db from "../../../middlewares/firebase";

export type Data = {
  games: {
    id: string;
    gid: string;
    startTime: string;
    endTime: string;
    code: number;
    prize: number;
    winner: string;
    passPrize: boolean;
    maxTry: number;
    title: string;
    isPaid: boolean;
  }[];
  totalGames: number;
  totalPrize: number;
};

const Games = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const games = await db.collection("games").get();
  const totalGames = games.docs.length;

  const formatDate = (date: any) => {
    const d = new Date(date.toDate());
    return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}`;
  };

  const gameList = await Promise.all(
    games.docs.map(async (game) => {
      const {
        gid,
        startTime,
        endTime,
        code,
        prize,
        winner,
        passPrize,
        maxTry,
        title,
        isPaid,
      } = game.data();
      const user = winner ? await db.collection("users").doc(winner).get() : null;
      return {
        id: game.id,
        gid,
        startTime: formatDate(startTime),
        endTime: formatDate(endTime),
        code,
        prize,
        winner: winner ? user?.data()?.username : "",
        passPrize,
        maxTry,
        title,
        isPaid,
      };
    })
  );
  const totalPrize = gameList.reduce((acc, game) => acc + game.prize, 0);
  res.status(200).json({ games: gameList, totalGames, totalPrize });
};
export default withJWT(Games);
