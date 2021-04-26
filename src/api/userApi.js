import 'whatwg-fetch'; // polyfilling fetch for browsers
// We can use polyfill.io to provide polyfill only to those browsers who need it

import getBaseUrl from './baseURL';
const baseURL = getBaseUrl();

export function getUsers () {
  return get('users')
}

export function deleteUser (id) {
  return del(`user${id}`)
}

function get (url) {
  return fetch(baseURL + url).then(onSuccess, onError)
}

function del (url) {
  const request = new Request(baseURL + url, {
    method: 'DELETE'
  });
  return fetch(request).then(onSuccess, onError);
}

function onSuccess (response) {
  return response.json()
}

function onError (err) {
  console.log(err) // eslint-disable-line no-console
}
