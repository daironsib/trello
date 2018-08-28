const URL = `http://localhost:5000/`

export function request(type, uri, body = {}) {
  if (type === 'GET') {
    return fetch(`${URL}${uri}`, {
      method: type,
      headers: {'content-type': 'application/json'}
    })
  } else {
    return fetch(`${URL}${uri}`, {
      method: type,
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(body)
    })
  }
}