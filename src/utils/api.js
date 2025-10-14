export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

function addItem(name, imageUrl, weather) {
  console.log("Data being sent to server:", { name, imageUrl, weather });
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}

function deleteItem(_id) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
  }).then(checkResponse);
}

export { getItems, addItem, deleteItem };
