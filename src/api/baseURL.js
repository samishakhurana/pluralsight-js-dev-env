export default function getBaseUrl () {
  // const inDevelopment = window.location.hostname === 'localhost';
  // return inDevelopment ? "http://localhost:3001/" : ""

  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/'
}

function getQueryStringParameterByName (name, url) {
  // Logic to check if useMockApi is present in url
  if (!url) url = window.location.href
  return url.includes(name)
}
