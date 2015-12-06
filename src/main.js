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
  constructor(exchange, currencyPair, opts={}) {
    this.exchange = exchange;
    this.currencyPair = currencyPair;
    this.opts = opts;

    // Validate exchange
    if (exchange === undefined) {
      throw new Error('exchange required');
    }
    if (validExchanges.indexOf(exchange) === -1) {
      throw new Error(`Unknown exchange "${exchange}"\nValid exchanges: ${validExchanges.join(', ')}`);
    }

    // Validate currencyPair
    if (currencyPair === undefined) {
      throw new Error('currencyPair required');
    }

    if (opts.timePeriod !== undefined) {
      if (validTimePeriods.indexOf(opts.timePeriod) === -1) {
        throw new Error(`Unknown time period "${opts.timePeriod}"\nValid timePeriods: ${validTimePeriods.join(', ')}`);
      }
    } else {
      opts.timePeriod = '1H';
    }
  }

  get src() {
    return `https://embed.cryptowat.ch/${this.exchange}/${this.currencyPair}/${this.opts.timePeriod}`
  }

  mount(elem) {
    if (typeof elem === 'string') {
      elem = document.querySelector(elem);
    }

    let iframe = document.createElement('iframe');
    iframe.setAttribute('src', this.src);

    elem.appendChild(iframe);
  }
}

export default Embed;
