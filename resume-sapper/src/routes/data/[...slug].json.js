import fetch from 'node-fetch';
import Constants from '../../constants';

export async function get(req, res) {
  const { slug } = req.params;

  const url = slug.join('/');

  const result = await fetch(`${Constants.STRAPI_BASE_URL}/${url}`);

  const data = await result.json();
  const contents = JSON.stringify(data);

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
