import type { NextApiRequest, NextApiResponse } from "next";
import { withJWT } from "../../../middlewares/withJWT";
import prisma from "../../../middlewares/prisma";
import demo from "../../../data/search.json";

type Data = {
  success: boolean;
};

const favoriteProduct = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { asin } = req.body;
  const product = await prisma.products.findUnique({
    where: {
      asin,
    },
  });
  if (product) {
    await prisma.products.delete({
      where: {
        asin,
      },
    });
    res.status(200).json({ success: true });
  } else {
    const newProduct = demo.SearchResult.Items.find(
      (item) => item.ASIN === asin
    );
    if (!newProduct) {
      res.status(404).json({ success: false });
    } else {
      await prisma.products.create({
        data: {
          asin,
          name: newProduct.ItemInfo.Title.DisplayValue,
          image: newProduct.Images.Primary.Medium.URL,
          url: newProduct.DetailPageURL,
          price: newProduct.Offers.Listings[0].Price.Amount,
          currency: newProduct.Offers.Listings[0].Price.Currency,
        },
      });
      res.status(200).json({ success: true });
    }
  }
};

export default withJWT(favoriteProduct);
