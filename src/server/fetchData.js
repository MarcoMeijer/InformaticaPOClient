
const serverURL = 'http://94.214.161.27:4000';

export default async function fetchData(url, body) {
  const response = await fetch(`${serverURL}/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  return await response.json();
}
