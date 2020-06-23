import { getEndpoint } from '../_endpoint';

export async function get(req, res) {
  const { projectName } = req.params;
  getEndpoint(req, res, `/projects/${projectName}`);
}
