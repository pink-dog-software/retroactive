#!/usr/bin/env node

const program = require('commander')
const { spawnSync } = require('child_process')

const path = './node_modules/.bin/'

program.description('Access docker containers')

const jobRunner = job => {
  if (job.status !== 0) {
    console.log('Failed to run the command')
    process.exit(1)
  }
}

const databaseRunner = () => {
  const method = `docker`
  const arguments = ['exec', '-it', 'retrodb', 'bash']
  console.log(`Executing ${method} ${arguments.join(' ')}`)

  return spawnSync(method, arguments, { stdio: 'inherit' })
}

program
  .command('database', 'db')
  .description('docker container that runs MySql database')
  .action(() => {
    jobRunner(databaseRunner())
  })

program.parse(process.argv)
if (!process.argv.slice(2).length) {
  program.outputHelp()
}
