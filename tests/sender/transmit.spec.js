const chai = require('chai');
const expect = chai.expect;
const sender = require('../../sender/transmit');
const testData = require('../test-data/data');


describe(`compressInput`, () => {
    it(`Should throw error for invalid input`, () => {
        const input = {
            hello: 'World'
        };
        expect(sender.compressInput.bind(input)).to.throw();
    })

    it(`Should return compressed buffer for valid input`, () => {
        const input = JSON.stringify(testData.event);

        const result = sender.compressInput(input);
        expect(result).to.be.instanceOf(Buffer);
    })
})

describe(`flattenInput`, () => {
    it(`Should return expected string for input array`, () => {
        const input = testData.queue;

        const result = sender.flattenInput(input);
        expect(result).to.be.an('string');
        expect(result.match(/\/m\//g).length).to.eql(4);

        input.forEach(inp => {
            expect(result.includes(inp)).to.be.eql(true);
        })
    })
})