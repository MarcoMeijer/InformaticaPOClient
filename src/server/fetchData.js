
const serverURL = 'http://localhost:4000';

export default function getData(url, body) {
  return fetch(`${serverURL}/${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  }).then(response => response.json());
}
