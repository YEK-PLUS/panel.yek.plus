import type { NextApiRequest, NextApiResponse } from "next";
import { withJWT } from "../../../middlewares/withJWT";
// @ts-ignore: Unreachable code error
import amazon from "amazon-buddy";
import prisma from "../../../middlewares/prisma";

const proxy = process.env.PROXY;

export type Data = {
  success: boolean;
};

const RemoveProduct = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { id } = req.body;
  await prisma.products.delete({
    where: {
      id: id,
    },
  });
  return res.status(200).json({ success: true });
};

export default withJWT(RemoveProduct);
