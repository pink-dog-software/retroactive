#!/usr/bin/env node

const program = require('commander');
const { spawnSync } = require('child_process');

const allTests = () => {
  const method = 'ram';
  const arguments = ['test', 'all'];
  const command = `${method} ${arguments.join(' ')}`;
  console.log(`Executing ${command}`);

  return spawnSync(method, arguments, { stdio: 'inherit' });
};

const pushToGit = () => {
  const method = 'git';
  const arguments = ['push'];
  const command = `${method} ${arguments.join(' ')}`;
  console.log(`Executing ${command}`);

  return spawnSync(method, arguments, { stdio: 'inherit' });
};

const jobRunner = (job) => {
  if (job.status !== 0) {
    console.log('Failed to run the command');
    process.exit(1);
  }
  pushToGit();
};

jobRunner(allTests());
