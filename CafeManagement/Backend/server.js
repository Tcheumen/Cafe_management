

require('dotenv').config();
const http = require('http');
const app = require('./index');

const Server = http.createServer(app);
Server.listen(process.env.PORT);


