const zlib = require('zlib');

const END_OF_MESSAGE = '/m/';

function unzip(buffer) {
    return zlib.gunzipSync(buffer).toString();
}

function logDataAccordingToInput(data) {
    const inp_arr = data.split(END_OF_MESSAGE);
    inp_arr.forEach(inp => console.log(inp));
}

module.exports = {
    unzip,
    logDataAccordingToInput
}