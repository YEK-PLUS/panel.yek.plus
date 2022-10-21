import type { NextApiRequest, NextApiResponse } from "next";
import { withJWT } from "../../../middlewares/withJWT";
// @ts-ignore: Unreachable code error
// import amazon from "amazon-buddy";
import prisma from "../../../middlewares/prisma";
import demo from "../../../data/search.json";
import { SearchResponse } from "../../../types/search-response";
// const proxy = process.env.PROXY;

export type Data = SearchResponse & {
  id: string;
};
const Search = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { query } = req.body;

  const search = await prisma.searchs.create({
    data: {
      query,
      country: ["TR", "US"],
    },
  });

  const response = {
    ...demo,
    SearchResult: {
      ...demo.SearchResult,
      Items: await Promise.all(
        demo.SearchResult.Items.map(async (item) => ({
          ...item,
          favorite: !!(await prisma.products.findUnique({
            where: {
              asin: item.ASIN,
            },
          })),
        }))
      ),
    },
    id: search.id,
  };

  // const products = (await amazon.products({
  //   keyword: query,
  //   proxy,
  // })) as Data;

  // products.result = await Promise.all(
  //   products.result.slice(0, 3).map(async (product) => ({
  //     ...product,
  //     tr: await amazon.asin({
  //       asin: product.asin,
  //       country: "TR",
  //       proxy,
  //     }),
  //   }))
  // );

  return res.status(200).json(response);
};

export default withJWT(Search);
