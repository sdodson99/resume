import fetch from 'node-fetch';

export async function get(req, res) {
  const result = await fetch('http://localhost:1337/projects');

  const projects = await result.json();
  const contents = JSON.stringify(projects);

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
