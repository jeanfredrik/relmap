'use strict';

var _chai = require('chai');

var _index = require('../dist/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('RelMap', function () {
  describe('constructor', function () {
    it('creates an instance of RelMap', function () {
      var result = new _index2.default();
      (0, _chai.expect)(result).to.be.a.instanceOf(_index2.default);
    });
  });
});