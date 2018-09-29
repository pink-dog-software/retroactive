const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

const db = require('./models/index');

app.use(helmet());

app.use('/api/', (res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
  next();
});

app.use(cors());

require('./controllers/user.route')(app);

db.sequelize.sync();

const server = app.listen(port, () => {
  const host = server.address().address;

  console.log(`App listening at http://${host}:${port}`);
});

module.exports = server;
