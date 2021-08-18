import type { NextApiRequest, NextApiResponse } from 'next';
import cheerio  from 'cheerio';
import got from 'got';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET'){
    const { url } = req.query;

    try {
      const shopRes = await got({
        url: url.toString()
      });
      const $ = cheerio.load(shopRes.body);
      const priceText = $('.bx-card-info__price > .item_current_price').text();
      res.json({
        meta: {},
        price: priceText.replace(' ₸','').replace(' ','')
      });
    } catch (e) {
      res.status(500).send({ error: 'Error' });
    }



  }
}
