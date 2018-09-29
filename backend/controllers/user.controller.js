/* eslint-disable no-console */
const db = require('../models/index');

const UserTable = db.users;

// Post: /api/users
exports.create = (req, res) => {
  UserTable.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((error) => {
      res.status(400).send({
        error
      });
    });
};

// Get: /api/users
exports.get = (req, res) => {
  UserTable.findAll()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((error) => {
      res.status(400).send({
        error
      });
    });
};

// Get: /api/users/:id
exports.getById = (req, res) => {
  const { id } = req.params;

  UserTable.findAll({
    where: {
      id
    }
  })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((error) => {
      res.status(400).send({
        error
      });
    });
};

// Put: /api/user/:id
exports.update = (req, res) => {
  const { id } = req.params;
  UserTable.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    },
    {
      where: {
        id
      }
    }
  )
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((error) => {
      res.status(400).send({
        error
      });
    });
};
