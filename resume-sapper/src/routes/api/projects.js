import { getEndpoint } from './_endpoint';

export async function get(req, res) {
  getEndpoint(req, res, '/projects');
}
