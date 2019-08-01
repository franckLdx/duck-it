"use strict";
// tslint:disable:no-console

const { duckIt } = require("duck-it");

// Result as default JSON
async function get() {
  const result = await duckIt('!w pizza');
  console.log(result.data.AbstractText);
}

async function getOption() {
  const result = await duckIt('bart simpsons', { format: 'xml' });
  console.log(result.data);
}

getOption().then(getOption);
