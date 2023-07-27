import configViewEngine from './view_engine';
import initWebRoute from './web';

const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

app.use(express.static('assets'));

server.listen(3000, () => {
  console.log('listening on port 3000')
});

configViewEngine(app);
initWebRoute(app);