import { getUsers } from './api/userApi'
import './index.css' // We are able to import css because of webpack

getUsers().then(result => {
  let userBody = '';
  result.forEach((obj) => {
    userBody = userBody + `<tr><td><a href="#" data-id="${obj.id}">Delete</a></td>
    <td>${obj.id}</td>
    <td>${obj.firstName}</td>
    <td>${obj.lastName}</td></tr>`
  });
  document.getElementById('body').innerHTML = userBody;
  return userBody;
})

