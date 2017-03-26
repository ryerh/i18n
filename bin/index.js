#!/usr/bin/env node

// External dependencies
// TODO: use async spawn for better experience
const spawnSync = require('child_process').spawnSync;

// Cmmand line args
const COMMAND = process.argv[2];
const OPTIONS = process.argv.slice(3);

function i18nCalypso(args) {
  const exe = spawnSync('i18n-calypso', args);
  console.log(exe.stdout.toString());
}

function po2json(args) {
  const exe = spawnSync('po2json', args);
  console.log(exe.stdout.toString());
}

switch (COMMAND) {
  case 'help': {
    console.log([
      'Usage: i18n Command [Options]              ',
      '                                           ',
      'Commands:                                  ',
      '  i18n help                   - output help',
      '  i18n addmissing             - output help',
      '  i18n help                   - output help',
      '                                           ',
      'Options:                                   ',
      '  i18n help                   - output help',
      '  i18n addmissing             - output help',
      '  i18n help                   - output help',
      '                                           ',
    ].join('\n'));
    break;
  }
  case 'addmissing': {
    i18nCalypso(OPTIONS);
    break;
  }
  default: {
    console.log(`Unknown command ${COMMAND}`);
  }
}

console.log('>>', process.env.PWD);
