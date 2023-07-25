import axios, { AxiosResponse } from 'axios';
import { ServerResponse } from 'http';

export interface ICookiesData {
  accessToken: string;
  refreshToken: string;
  memberId : string;
}

export const API = {
  setAllCookies: async (data:ICookiesData): Promise<AxiosResponse> => {
    const response = await axios.post('/api/set-all-cookies', data);
    return response;
  },

  getCookies: async (res: { headers: { cookie: string } }): Promise<AxiosResponse> => {
    const response = await axios.get('/api/get-cookies', {
      headers: {
        Cookie: res.headers.cookie,
      },
    });
    return response;
  },
};
