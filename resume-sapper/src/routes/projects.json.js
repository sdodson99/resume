import fetch from 'node-fetch';

let contents;

export async function get(req, res) {
  const result = await fetch('http://localhost:1337/projects');

  const posts = await result.json();
  contents = JSON.stringify(posts);

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
