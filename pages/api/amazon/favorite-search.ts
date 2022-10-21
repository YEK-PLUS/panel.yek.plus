import type { NextApiRequest, NextApiResponse } from "next";
import { withJWT } from "../../../middlewares/withJWT";
import prisma from "../../../middlewares/prisma";

type Data = {
  success: boolean;
  favorite?: boolean;
};

const favoriteSearch = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.body;
    const search = await prisma.searchs.findUnique({
      where: {
        id,
      },
    });
    if (!search) {
      return res.status(404).json({ success: false });
    }
    await prisma.searchs.update({
      where: {
        id,
      },
      data: {
        favorite: !search.favorite,
      },
    });
    return res.status(200).json({ success: true, favorite: !search.favorite });
  } catch (error) {
    return res.status(500).json({ success: false });
  }
};

export default withJWT(favoriteSearch);
