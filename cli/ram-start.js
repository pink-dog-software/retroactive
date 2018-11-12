#!/usr/bin/env node

const program = require('commander');
const { spawnSync } = require('child_process');

const path = './node_modules/.bin/';

program.description('Startup scripts for Boilerplate');

const startFront = () => {
  const method = `${path}webpack-dev-server`;
  const arguments = [
    '--mode',
    'development',
    '--open',
    '--hot',
    '--port',
    '8080'
  ];
  const command = `${method} ${arguments.join(' ')}`;
  console.log(`Executing ${command}`);

  return spawnSync(method, arguments, { stdio: 'inherit' });
};

const startBack = () => {
  const method = 'node';
  const arguments = ['./backend/app.js'];
  const command = `${method} ${arguments.join(' ')}`;
  console.log(`Executing ${command}`);

  return spawnSync(method, arguments, { stdio: 'inherit' });
};

const openAll = () => {
  const method = `gnome-terminal`;
  const arguments = [
    `--tab`,
    '--title',
    'Retroactive Server',
    `-e`,
    'sh -c "node ./backend/app.js; exec bash"',
    '--tab',
    '--title',
    'Retroactive Src',
    `-e`,
    'sh -c "./node_modules/.bin/webpack-dev-server --mode development --open --hot --port 8080; exec bash";'
  ];
  const command = `${method} ${arguments.join(` `)}`;
  console.log(`Executing ${command}`);

  return spawnSync(method, arguments);
};

const runner = (job) => {
  if (job.status !== 0) {
    console.log('Failed to run the command');
    process.exit(1);
  }
};

program
  .command('frontend')
  .alias('fe')
  .description('Starts the frontend')
  .action(() => {
    runner(startFront());
  });

program
  .command('backend')
  .alias('be')
  .description('Starts the backend')
  .action(() => {
    runner(startBack());
  });

program
  .command('all')
  .description('Starts Retroactive')
  .action(() => {
    runner(openAll());
  });

program.parse(process.argv);
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
