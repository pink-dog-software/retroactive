#!/usr/bin/env node
'use strict';

const program = require('commander');

program.command('start', 'start up scripts for boilerplate project');

program.parse(process.argv);
