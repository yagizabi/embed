import URI from 'urijs';

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

const validLocales = [
  'en', 'es', 'zh-CN', 'de', 'ja-JP', 'el-GR', 'da-DK'
]

const requiredColorSchemeKeys = [
    'bg', 'text', 'textStrong', 'textWeak', 'short', 'shortFill', 'long', 'longFill', 'cta', 'ctaHighlight', 'alert'
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
    // TODO validate that exchange supports this currencyPair (generated config)
    // As this is now, it will just render an iframe containing the 404 page

    if (opts.timePeriod !== undefined) {
      if (validTimePeriods.indexOf(opts.timePeriod) === -1) {
        throw new Error(`Unknown time period "${opts.timePeriod}"\nValid timePeriods: ${validTimePeriods.join(', ')}`);
      }
    } else {
      opts.timePeriod = '1H';
    }

    if (opts.locale !== undefined) {
      if (validLocales.indexOf(opts.locale) === -1) {
        throw new Error(`Unknown locale "${opts.locale}"\nValid locales: ${validLocales.join(', ')}`);
      }
    }

    opts.timePeriod = opts.timePeriod.toLowerCase();

    if (opts.width === undefined) opts.width = '100%';
    if (opts.height === undefined) opts.height = '100%';
  }

  get src() {
    let uri = new URI(`https://embed.cryptowat.ch/${this.exchange}/${this.currencyPair}/${this.opts.timePeriod}`);
    let query = {}
    if (this.opts.locale) {
      query.locale = this.opts.locale;
    }

    if (this.opts.presetColorScheme !== undefined) {
      query.presetColorScheme = this.opts.presetColorScheme;
    } else if (this.opts.customColorScheme !== undefined) {
      query.customColorScheme = encodeURIComponent(JSON.stringify(this.opts.customColorScheme));
    }
    uri.query(query);
    return uri.toString()
  }

  createIframe() {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('src', this.src);
    iframe.setAttribute('frameborder', 0);
    iframe.setAttribute('allowfullscreen', true);
    iframe.setAttribute('width', this.opts.width);
    iframe.setAttribute('height', this.opts.height);

    return iframe;
  }

  mount(elem) {
    if (typeof elem === 'string') {
      elem = document.querySelector(elem);
    }
    elem.appendChild(this.createIframe());
  }
}

export default Embed;
