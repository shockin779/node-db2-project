const express = require('express');
const server = express();
const helmet = require('helmet');
const carsRouter = require('./carsRouter/carsRouter');

server.use(express.json(), helmet());
server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
    res.status(200).json({message: 'API is up and running'})
});

module.exports = server;