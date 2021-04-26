/* This script generates mock data for local development
This way you don't have to pint to an actual api, you can enjoy
realistic and randomized data. And rapid page load due to static random data */

/* eslint-disable no-console */

import jsf from 'json-schema-faker'; // used to create the schema of our moke table
import { schema } from './mockDataSchema';
import chalk from 'chalk';
import fs from 'fs';

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function (err) {
  if (err) {
    console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated"))
  }
})
