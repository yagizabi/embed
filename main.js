/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _embed = __webpack_require__(1);

	var _embed2 = _interopRequireDefault(_embed);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _embed2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// TODO generate this and corresponding validCurrencyPairs
	// using config from go codebase
	var validExchanges = ['796', 'bitmex', 'bitfinex', 'bitflyer', 'bitstamp', 'bitvc', 'bitx', 'btc-china', 'btce', 'cexio', 'coinbase', 'cryptsy', 'gemini', 'huobi', 'kraken', 'mexbt', 'mtgox', 'okcoin', 'poloniex', 'quoine'];

	var validTimePeriods = ['1', '3', '5', '15', '30', '1H', '2H', '4H', '6H', '12H', '1D', '3D', '1W'];

	var Embed = (function () {
	  function Embed(exchange, currencyPair, opts) {
	    _classCallCheck(this, Embed);

	    this.config = config;
	    this._validateConfig();
	  }

	  _createClass(Embed, [{
	    key: '_validateConfig',
	    value: function _validateConfig() {
	      this._assertConfigDefined('exchange');
	      if (validExchanges.indexOf(config.exchange) === -1) {
	        throw new Error('Unknown exchange "' + config.exchange + '"\nValid exchanges: ' + validExchanges.join(', '));
	      }
	      this._assertConfigDefined('currencyPair');
	      this._assertConfigDefined('timePeriod');
	      if (validTimePeriods.indexOf(config.timePeriod) === -1) {
	        throw new Error('Unknown time period "' + config.exchange + '"\nValid timePeriods: ' + validTimePeriods.join(', '));
	      }
	    }
	  }, {
	    key: '_assertConfigDefined',
	    value: function _assertConfigDefined(key) {
	      if (this.config[key] === undefined) {
	        throw new Error('Missing required config "' + key + '"');
	      }
	    }
	  }, {
	    key: 'mount',
	    value: function mount(elem) {
	      if (typeof elem === 'string') {
	        elem = document.querySelector(elem);
	      }

	      var iframe = document.createElement('iframe');
	      iframe.setAttribute('src', 'https://cryptowat.ch/' + this.config.exchange + '/' + this.config.currencyPair + '/' + this.config.timePeriod);

	      elem.appendChild(iframe);
	    }
	  }]);

	  return Embed;
	})();

	exports.default = Embed;

/***/ }
/******/ ]);