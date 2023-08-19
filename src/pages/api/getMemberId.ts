import { NextApiRequest, NextApiResponse } from "next";
import { parseCookies } from "@/util/parseCookie";

interface IParsedCookies {
  memberId?: string;
};

const getMemberId = (req: NextApiRequest, res: NextApiResponse) => {
  const cookies:IParsedCookies = parseCookies(req.headers.cookie)
  const memberId = Number(cookies.memberId)

  res.status(200).json({ memberId });
};

export default getMemberId