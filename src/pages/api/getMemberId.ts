import { NextApiRequest, NextApiResponse } from "next";
import { parseCookies } from "@/util/parseCookie";

interface IParsedCookies {
  memberId?: string;
}

const getMemberId = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const cookies: IParsedCookies = parseCookies(req.headers.cookie);
    const memberId = Number(cookies.memberId);
    return res.status(200).json({ memberId });
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default getMemberId;
