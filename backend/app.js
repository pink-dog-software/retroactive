const express = require('express');
const path = require('path');
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

app.use(helmet());

app.use('/api/', (res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
  next();
});

app.use(cors());

app.use(express.static(path.join(__dirname, '../dist/index_bundle.js')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

const server = app.listen(port, () => {
  const host = server.address().address;

  console.log(`App listening at http://${host}:${port}`);
});

module.exports = server;
