// This file is just to check the production build locally, Its not required for actual production hosting

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression'; // send compressed files by using gzip

/* eslint-disable no-console */
// Disable no console rule for this file

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.get('/users', function (req, res) {
  res.json([
    { "id": 1, "firstName": "Samisha", "lastName": "Khurana" },
    { "id": 2, "firstName": "Saurabh", "lastName": "Panchal" }
  ]);
})

app.listen(port, function (err) {
  if (err) console.log(err);
  else open ("http://localhost:" + port)
});
