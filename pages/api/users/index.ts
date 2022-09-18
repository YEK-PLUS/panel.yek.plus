import type { NextApiRequest, NextApiResponse } from "next";
import { withJWT } from "../../../middlewares/withJWT";
import db from "../../../middlewares/firebase";

export type Data = {
  users: {
    id: string;
    fullname: string;
    username: string;
    iban: string;
    phoneNumber: string;
  }[];
  totalUsers: number;
};

const Users = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const users = await db.collection("users").get();
  const totalUsers = users.docs.length;
  const userList = users.docs.map((user) => {
    const { fullname, username, iban, phoneNumber } = user.data();
    return {
      id: user.id,
      fullname,
      username,
      iban,
      phoneNumber,
    };
  });
  res.status(200).json({ users: userList, totalUsers });
};
export default withJWT(Users);
