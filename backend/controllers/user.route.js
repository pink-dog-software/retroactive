module.exports = (app) => {
  const users = require('./user.controller');

  app.post('/api/users', users.create);

  app.put('/api/users/:id', users.update);

  app.get('/api/users', users.get);

  app.get('/api/users/:id', users.getById);
};
