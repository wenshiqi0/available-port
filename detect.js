const detect = require('get-port');

const preferPort = process.env.port;

detect().then(port => console.log(port));
