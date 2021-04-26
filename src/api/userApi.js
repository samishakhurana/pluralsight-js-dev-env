import 'whatwg-fetch'; // polyfilling fetch for browsers
// We can use polyfill.io to provide polyfill only to those browsers who need it

export function getUsers () {
  return get('users')
}

function get (url) {
  return fetch(url).then(onSuccess, onError)
}

function onSuccess (response) {
  return response.json()
}

function onError (err) {
  console.log(err) // eslint-disable-line no-console
}
