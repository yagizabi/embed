// TODO generate this and corresponding validCurrencyPairs
// using config from go codebase
const validExchanges = [
	'796',
	'bitmex',
	'bitfinex',
	'bitflyer',
	'bitstamp',
	'bitvc',
	'bitx',
	'btc-china',
	'btce',
	'cexio',
	'coinbase',
	'cryptsy',
	'gemini',
	'huobi',
	'kraken',
	'mexbt',
	'mtgox',
	'okcoin',
	'poloniex',
	'quoine'
]

const validTimePeriods = [
  '1', '3', '5', '15', '30', '1H', '2H', '4H', '6H', '12H', '1D', '3D', '1W'
]

class Embed {
  constructor(exchange, currencyPair, opts) {
    this.config = config;
    this._validateConfig();
  }

  _validateConfig() {
    this._assertConfigDefined('exchange');
    if (validExchanges.indexOf(config.exchange) === -1) {
      throw new Error(`Unknown exchange "${config.exchange}"\nValid exchanges: ${validExchanges.join(', ')}`);
    }
    this._assertConfigDefined('currencyPair');
    this._assertConfigDefined('timePeriod');
    if (validTimePeriods.indexOf(config.timePeriod) === -1) {
      throw new Error(`Unknown time period "${config.exchange}"\nValid timePeriods: ${validTimePeriods.join(', ')}`);
    }
  }

  _assertConfigDefined(key) {
    if (this.config[key] === undefined) {
      throw new Error(`Missing required config "${key}"`);
    }
  }

  mount(elem) {
    if (typeof elem === 'string') {
      elem = document.querySelector(elem);
    }

    let iframe = document.createElement('iframe');
    iframe.setAttribute('src', `https://cryptowat.ch/${this.config.exchange}/${this.config.currencyPair}/${this.config.timePeriod}`);

    elem.appendChild(iframe);
  }
}

export default Embed;
