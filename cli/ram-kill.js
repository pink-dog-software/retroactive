#!/usr/bin/env node

const program = require('commander');
const { exec } = require('child_process');

program.description('kills different things');

const portSlayer = (port) => {
  const command = `kill $(lsof -t -i:${port})`;
  console.log(`Executing ${command}`);

  return exec(command, { stdio: 'inherit' });
};

const ramKiller = () => {
  const command = `kill $(ps aux | grep '[.]/node_modules/.bin/webpack-dev-server --mode development --open --hot --port 8080' | awk '{print $2}'); kill $(ps aux | grep '[n]ode ./backend/app.js' | awk '{print $2}'); docker stop mysql1`;
  console.log(`Executing ${command}`);

  return exec(command, { stdio: 'inherit' });
};

program.option('-p, --port [port]', 'Kill all processes accessing given port');

program
  .command('all')
  .description('kills all glass house processes')
  .action(() => {
    ramKiller();
  });

program.parse(process.argv);
if (!process.argv.slice(2).length) {
  program.outputHelp();
}

if (program.port) {
  portSlayer(program.port);
}
