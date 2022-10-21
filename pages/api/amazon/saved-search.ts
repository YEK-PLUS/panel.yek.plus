import type { NextApiRequest, NextApiResponse } from "next";
import { withJWT } from "../../../middlewares/withJWT";
import prisma from "../../../middlewares/prisma";
import { Searchs } from "@prisma/client";

const proxy = process.env.PROXY;

export type Data = Searchs[];

const SavedSearch = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const history = await prisma.searchs.findMany({
    where: {
      favorite: true,
    },
  });
  return res.status(200).json(history);
};

export default withJWT(SavedSearch);
