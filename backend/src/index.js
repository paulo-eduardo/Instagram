require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const uri = process.env.MONGO_URL;
mongoose.connect(uri, { useNewUrlParser: true });

app.use(cors('*'));

app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333, () => {
  console.log('Listen to por 3333');
});
