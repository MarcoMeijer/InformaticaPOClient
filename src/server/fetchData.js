
const serverURL = 'http://94.214.161.27:4000';

export default async function getData(url, body) {
  const response = await fetch(`${serverURL}/${url}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    });
    return await response.json();
}
