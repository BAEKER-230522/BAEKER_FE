import type { NextApiRequest, NextApiResponse } from 'next';

interface Cookies {
  [cookieName: string]: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Cookies are in the headers of the incoming request
  const { cookie } = req.headers;

  // Check if cookies exist
  if (!cookie) {
    res.status(200).json({});
    return;
  }

  // Parse them into an object and return as JSON
  const cookies: Cookies = cookie.split('; ').reduce((accum: Cookies, current) => {
    const [name, value] = current.split('=');
    accum[name] = value;
    return accum;
  }, {});

  res.status(200).json(cookies);
}