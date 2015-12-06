var assert = require('assert');
var Embed = require('../dist/main.js');

describe('Embed', function () {
  it('generates the default URL when given no opts', function() {
    assert.equal(
      (new Embed('bitfinex', 'btcusd').src),
      'https://embed.cryptowat.ch/bitfinex/btcusd/1h'
    );
  });

  it('handles the timePeriod opt', function() {
    assert.equal(
      (new Embed('bitfinex', 'btcusd', { timePeriod: '6H' }).src),
      'https://embed.cryptowat.ch/bitfinex/btcusd/6h'
    );
  });

  it('handles the presetColorScheme opt', function() {
    assert.equal(
      (new Embed('bitfinex', 'btcusd', { presetColorScheme: 'albuquerque' }).src),
      'https://embed.cryptowat.ch/bitfinex/btcusd/1h?presetColorScheme=albuquerque'
    );
  });

});
