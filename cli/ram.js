#!/usr/bin/env node
'use strict'

const program = require('commander')

program.command('start', 'start up scripts for Retroactive')

program.command('test', 'scripts for running automated tests')

program.command('ship', 'runs tests before pushing commit to github')

program.command('docker', 'access docker containers')

program.command('kill', 'kills stuff')

program.parse(process.argv)
