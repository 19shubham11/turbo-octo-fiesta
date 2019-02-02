'use strict'

/*
*  Modify this file as needed.
*/

const http = require('http')
const helpers = require('./helpers');

process.on('SIGTERM', function () {
  process.exit(0)
})

const server = http.createServer(async function (req, res) {
  let body = []
  req.on('data', body.push.bind(body))
  req.on('end', () => {
    // console.log('bytes received', req.socket.bytesRead)
    // just print to stdout
    const unzippedData = helpers.unzip(Buffer.concat(body));
    helpers.logDataAccordingToInput(unzippedData);
    res.end();
  })
})

server.listen(8080)
