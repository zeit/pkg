#!/usr/bin/env node

'use strict';

const assert = require('assert');
const utils = require('../utils.js');

assert(!module.parent);
assert(__dirname === process.cwd());

const target = process.argv[2] || 'host';
const input = './test-x-index';
const exe = { win32: '.exe', linux: '', darwin: '' }[process.platform];
const newcomers = [ 'out/test-x-index' + exe ];
const before = utils.filesBefore(newcomers);

utils.pkg.sync([
  '--target', target,
  '--out-dir', 'out', input
]);

utils.filesAfter(before, newcomers);
utils.vacuum.sync('out');