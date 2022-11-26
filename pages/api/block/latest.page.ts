// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
    data: any;
};

const BASE_URL = 'https://dev-api.sonarpod.com';

export const getLatestBlock = () => {
    return axios.get(`${BASE_URL}/osmosis/block`, {
        params: {},
    });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { data } = await getLatestBlock();
    res.status(200).json({ data });
}
