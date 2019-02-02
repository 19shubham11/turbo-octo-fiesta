'use strict'

const request = require('request')
const zlib = require('zlib');

/*compressing and sending 5 messages at a time to keep up with latency
*this is a design similar to individual sensor nodes sending data to an intermediate node which-
-sends data to the server, rather than all the nodes directly contacting the server.
*/

/* Also, since in our implementation, we are continuously reveiving data, we can ignore timestamp 
for the messages. In a real world scenario, we would need timestamp for each message to appropriately
send it to the server, in case the intermediate node's queue never reaches 5 messages or the nodes do not 
send messages regularly, we still need to send data back to the server in required time.
*/

let queue = [];
const MAX_MESSAGE_COUNT = 5;
/*We can reach better compression levels if we take 10(or possibly more) messages at a time, but 
compression and decompression will be expensive and we will lose out on latency.*/

/*
*  This function will be called for each event.  (eg: for each sensor reading)
*  Modify it as needed.
*/


async function transmtiData (eventMsg, encoding, callback) {
  const inp = JSON.stringify(eventMsg);
  queue.push(inp);
  callback();
  if (queue.length === MAX_MESSAGE_COUNT) {
    const input = flattenInput(queue);

    //empty queue for next set of messages
    queue = [];
    const compressedInput = compressInput(input);
    request.post('http://localhost:8080/event', { body: compressedInput }, (err, res, body) => {
    })
  }
}

/*
  Creating a string of messages separated by a character denoting end of a particular message.
*/
function flattenInput(input) {
  let inpString = "";
  input.forEach((inp, index) => {
    if (index !== input.length - 1) {
      //append this at end of each message(except the 5th message) to determine end of message(es) at server
      inp += '/m/';
    }
    inpString += inp;
  })
  return inpString;
}

/*
 * Compressing request data using gzip.

 Could have used deflate as well but both gzip and delfate use the same algorithm with gzip
having a few extra headers for checksum. Infact deflate uses 12 bytes less per request
(which is probably the header for gzip);
 */
function compressInput(data) {
  if (typeof(data) === 'object'){
    throw new Error( `Input should only be string or a buffer`);
  } else {
    return zlib.gzipSync(data, { level: zlib.Z_BEST_SPEED });
  }
}

module.exports = {
  transmtiData,
  compressInput,
  flattenInput
}