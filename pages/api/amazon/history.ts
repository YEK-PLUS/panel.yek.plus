import type { NextApiRequest, NextApiResponse } from "next";
import { withJWT } from "../../../middlewares/withJWT";
// @ts-ignore: Unreachable code error
import amazon from "amazon-buddy";
import prisma from "../../../middlewares/prisma";
import { Searchs } from "@prisma/client";

const proxy = process.env.PROXY;

export type Data = Searchs[];

const History = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const history = await prisma.searchs.findMany();
  return res.status(200).json(history);
};

export default withJWT(History);
