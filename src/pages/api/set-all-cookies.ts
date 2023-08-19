import { NextApiRequest, NextApiResponse } from 'next';

const setAllCookies = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {  
    const encodedNickname = encodeURIComponent(req.body.nickname);
    res.setHeader('Set-Cookie', [
      `accessToken=${req.body.accessToken}; Path=/; HttpOnly; Secure; SameSite=Lax;`,
      `refreshToken=${req.body.refreshToken}; Path=/; HttpOnly; Secure; SameSite=Lax;`,
      `userId=${req.body.userId}; Path=/; HttpOnly; Secure; SameSite=Lax;`,
    ]);

    res.status(200).json({ message: 'Success' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default setAllCookies