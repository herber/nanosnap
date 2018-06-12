#!/usr/bin/env node

const mri = require('mri');
const server = require('./src/server');

const args = process.argv.slice(2);

const parsed = mri(args, {
  alias: {
    port: 'port'
  },
  default: {
    port: 3000
  }
});

server(parsed.port);

console.log('🎉  Listening to port: ' + parsed.port);
