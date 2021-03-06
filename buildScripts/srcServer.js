import express from 'express';
import path from 'path';
import open from 'open';

// To set our dev server to serve webpack bundles
import webpack from 'webpack'
import config from '../webpack.config.dev'

/* eslint-disable no-console */
// Disable no console rule for this file

const port = 3000;
const app = express();
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
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
