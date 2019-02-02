const chai = require('chai');
const expect = chai.expect;
const helpers = require('../../receiver/helpers');
const sender = require('../../sender/transmit');
const testData = require('../test-data/data');


describe(`unzip`, () => {
    it(`Should return unziped content which is same as the input`, () => {
        const input = JSON.stringify(testData.event);
        const zip = sender.compressInput(input);

        const result = helpers.unzip(zip);

        expect(result).to.be.an('string');
        expect(result).to.be.eql(input);
    })
})

describe(`logDataAccordingToInput`, () => {
    it(`Logs output in expected format`, () => {
        let output = '';
        const flatLog = input => (output+=input);

        //mocking console
        console.log = jest.fn(flatLog);
        const input = sender.flattenInput(testData.queue);
        helpers.logDataAccordingToInput(input);
        
        let expectedOutput = '';
        testData.queue.forEach(data => expectedOutput+=data);

        expect(output).to.be.eql(expectedOutput);
    })
})
