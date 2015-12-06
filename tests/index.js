var assert = require('assert');
var Embed = require('../dist/main.js');

describe('Embed', function () {
  it('Generates the correct iframe src', function() {
    assert.equal(
      (new Embed('bitfinex', 'btcusd').src),
      'https://embed.cryptowat.ch/bitfinex/btcusd'
    );
    
  });
});
