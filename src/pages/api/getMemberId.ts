import { NextApiRequest, NextApiResponse } from "next";
import { parseCookies } from "@/util/parseCookie";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = parseCookies(req.headers.cookie)
  const memberId = Number(cookies.memberId)

  res.status(200).json({ memberId });
};