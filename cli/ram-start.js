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

const startDb = () => {
  const method = 'docker';
  const arguments = ['start', 'mysql1'];
  const command = `${method} ${arguments.join(' ')}`;
  console.log(`Executing ${command}`);

  return spawnSync(method, arguments, { stdio: 'inherit' });
};

const migrateDB = () => {
  const method = 'node';
  const arguments = [
    '~/react-redux-node-mysql/node_modules/.bin/sequelize',
    'db:migrate'
  ];
  const command = `${method} ${arguments.join(' ')}`;
  console.log(`Executing ${command}`);

  return spawnSync(method, arguments, { stdio: 'inherit' });
};

const dbWait = () => {
  const method = 'sleep';
  const arguments = ['3'];
  const command = `${method} ${arguments.join(' ')}`;
  console.log(`Executing ${command}`);

  return spawnSync(method, arguments, { stdio: 'inherit' });
};

const openAll = () => {
  const method = `gnome-terminal`;
  const arguments = [
    `--tab`,
    '--title',
    'Boilerplate Backend',
    `-e`,
    'sh -c "docker start mysql1; sleep 3; node ~/react-redux-node-mysql/node_modules/.bin/sequelize db:migrate; node ./backend/app.js; exec bash"',
    '--tab',
    '--title',
    'Boilerplate Frontend',
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
  .command('database')
  .alias('db')
  .description('Starts the database')
  .action(() => {
    runner(startDb());
    runner(dbWait());
    runner(migrateDB());
  });

program
  .command('all')
  .description('Starts the boilerplate')
  .action(() => {
    runner(openAll());
  });

program.parse(process.argv);
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
