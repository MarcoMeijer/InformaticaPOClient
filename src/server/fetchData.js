const serverURL = "https://marco-meijer.nl";

export default async function fetchData(url, body) {
  const response = await fetch(`${serverURL}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return await response.json();
}
