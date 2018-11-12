#!/usr/bin/env node

const program = require('commander');
const { exec, spawn, spawnSync } = require('child_process');

const path = './node_modules/.bin/';

program.description('Automated test scripts for Retroactive');

const testDirectories = {
  src: './src/**/*.spec.js',
  server: '',
  lint: './**/*.js'
};

const linter = () => {
  const method = `${path}eslint`;
  const arguments = ['-c', './.eslintrc.json', testDirectories.lint];
  const command = `${method} ${arguments.join(' ')}`;
  console.log(`Executing ${command}`);

  return spawnSync(method, arguments, { stdio: 'inherit' });
};

const auditor = () => {
  console.log(`Executing npm audit`);

  return spawnSync('npm', ['audit'], { stdio: 'inherit' });
};

const unitRunner = (type) => {
  const method = `${path}mocha`;
  const arguments = [
    '--require',
    '@babel/register',
    '--require',
    './src/pre-processor.js',
    '--colors',
    '--timeout',
    '5000',
    testDirectories[type]
  ];
  const command = `${method} ${arguments.join(' ')}`;
  console.log(`Executing ${command}`);

  return spawnSync(method, arguments, { stdio: 'inherit' });
};

const backRunner = (type) => {
  const method = `${path}mocha`;
  const arguments = [
    '--require',
    '@babel/register',
    '--colors',
    '--timeout',
    '5000',
    testDirectories[type]
  ];
  const command = `${method} ${arguments.join(' ')}`;
  console.log(`Executing ${command}`);

  return spawnSync(method, arguments, { stdio: 'inherit' });
};

const startFrontJourney = () => {
  const method = `${path}webpack-dev-server`;
  const arguments = ['--mode', 'development', '--port', '8090'];
  const command = `${method} ${arguments.join(' ')}`;
  console.log(`Executing ${command}`);

  return spawn(method, arguments, { stdio: 'ignore', detatched: true });
};

const stopFrontJourney = () => {
  const command = "kill $(ps aux | grep '[8]090' | awk '{print $2}')";
  console.log(`Executing ${command}`);

  return exec(command, { stdio: 'inherit' });
};

const journeyRunner = () => {
  const method = `${path}codeceptjs`;
  const arguments = ['run', '--steps'];
  const command = `${method} ${arguments.join(' ')}`;
  console.log(`Executing ${command}`);

  return spawnSync(method, arguments, { stdio: 'inherit' });
};

const jobRunner = (job) => {
  if (job.status !== 0) {
    console.log('Failed to run the command');
    process.exit(1);
  }
};

program
  .command('frontend')
  .alias('fe')
  .description('unit test runner for Front End')
  .action(() => {
    jobRunner(unitRunner('src'));
  });

program
  .command('backend')
  .alias('be')
  .description('unit test runner for Back End')
  .action(() => {
    jobRunner(backRunner('server'));
  });

program
  .command('journeys')
  .alias('journey')
  .description('journey test runner for the Boilerplate')
  .action(() => {
    startFrontJourney();
    jobRunner(journeyRunner());
    stopFrontJourney();
  });

program
  .command('lint')
  .description('linter for Boilerplate')
  .action(() => {
    jobRunner(linter());
  });

program
  .command('audit')
  .description('audits node packages for security vulns')
  .action(() => {
    auditor();
  });

program
  .command('all')
  .description('runs all the tests')
  .action(() => {
    stopFrontJourney();
    jobRunner(unitRunner('src'));
    jobRunner(linter());
    startFrontJourney();
    jobRunner(journeyRunner());
    stopFrontJourney();
    auditor();
  });

program.parse(process.argv);
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
