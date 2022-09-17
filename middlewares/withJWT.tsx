import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse, NextPage } from "next";
import getConfig from "next/config";

const {
  serverRuntimeConfig: { JWT_SECRET },
} = getConfig();

export const withJWT = (
  handler: (req: NextApiRequest, res: NextApiResponse) => void
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.body.token || req.cookies.token;
    
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    try {
      await jwt.verify(token, JWT_SECRET);
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  };
};
