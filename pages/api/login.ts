import type { NextApiRequest, NextApiResponse } from "next";
import { withJWT } from "../../middlewares/withJWT";

type Data = {
  success: boolean;
};

const Login = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  return res.status(200).json({ success: true });
};

export default withJWT(Login);
