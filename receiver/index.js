'use strict'

/*
*  Modify this file as needed.
*/

const http = require('http')
const zlib = require('zlib');

const END_OF_MESSAGE = '/m/';

process.on('SIGTERM', function () {
  process.exit(0)
})

function unzip(buffer) {
  return zlib.gunzipSync(buffer).toString();
}

function logDataAccordingToInput(data) {
  const inp_arr = data.split(END_OF_MESSAGE);
  inp_arr.forEach(inp => console.log(inp));
}

const server = http.createServer(async function (req, res) {
  let body = []
  req.on('data', body.push.bind(body))
  req.on('end', () => {
    // console.log('bytes received', req.socket.bytesRead)
    // just print to stdout
    const unzippedData = unzip(Buffer.concat(body));
    logDataAccordingToInput(unzippedData);
    res.end();
  })
})

server.listen(8080)
