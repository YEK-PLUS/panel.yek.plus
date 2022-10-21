import type { NextApiRequest, NextApiResponse } from "next";
import { withJWT } from "../../../middlewares/withJWT";
import prisma from "../../../middlewares/prisma";
import { Products, Searchs } from "@prisma/client";

const proxy = process.env.PROXY;

export type Data = Products[];

const _Products = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const products = await prisma.products.findMany();
  return res.status(200).json(products);
};

export default withJWT(_Products);
