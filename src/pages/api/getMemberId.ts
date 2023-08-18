import { NextApiRequest, NextApiResponse } from "next";
import { parseCookies } from "@/util/parseCookie";

interface IParsedCookies {
  memberId?: string;
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  const cookies:IParsedCookies = parseCookies(req.headers.cookie)
  const memberId = Number(cookies.memberId)

  res.status(200).json({ memberId });
};