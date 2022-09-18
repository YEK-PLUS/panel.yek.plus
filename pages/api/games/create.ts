import type { NextApiRequest, NextApiResponse } from "next";
import { withJWT } from "../../../middlewares/withJWT";
import db from "../../../middlewares/firebase";

export type Data = {
  success: boolean;
  message: string;
};

const Create = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { title, startTime, endTime, code, prize, maxTry } = req.body;
  db.collection("games")
    .add({
      title,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      code,
      prize,
      maxTry,
      gid: Math.floor(Math.random() * 1000000000),
      winner: "",
      passPrize: false,
      isPaid: false,
    })
    .then(() => {
      res.status(200).json({ success: true, message: "Game created" });
    })
    .catch((err) => {
      res.status(500).json({ success: false, message: err.message });
    });
};

export default withJWT(Create);
