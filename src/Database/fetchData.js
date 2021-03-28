const serverURL = "https://marco-meijer.nl:80";

let key = "";

export function setKey(newKey) {
  key = newKey;
}
export default async function fetchData(url, body) {
  if (body === undefined) {
    body = {};
  }
  body.key = key;
  const response = await fetch(`${serverURL}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return await response.json();
}
