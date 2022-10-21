import type { NextApiRequest, NextApiResponse } from "next";
import { withJWT } from "../../../middlewares/withJWT";
// @ts-ignore: Unreachable code error
import amazon from "amazon-buddy";

const proxy = process.env.PROXY;

export type Data = {
  country: string;
  country_code: string;
  currency: string;
  host: string;
};

const CountryList = async (
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) => {
  const countries = await amazon.countries({
    proxy,
  });
  return res.status(200).json(Object.values(countries));
};

export default withJWT(CountryList);
