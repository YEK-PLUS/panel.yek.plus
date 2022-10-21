import type { NextApiRequest, NextApiResponse } from "next";
import { withJWT } from "../../../middlewares/withJWT";
// @ts-ignore: Unreachable code error
import amazon from "amazon-buddy";

const proxy = process.env.PROXY;

export type Data = {
  name: string;
  category: string;
};

const CategoryList = async (
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) => {
  const categories = await amazon.categories({
    proxy,
  });
  return res.status(200).json(Object.values(categories));
};

export default withJWT(CategoryList);
