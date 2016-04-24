import {
  expect,
} from 'chai';
import RelMap from '../dist/index.js';

describe('RelMap', function() {
  describe('constructor', function() {
    it('creates an instance of RelMap', function() {
      var result = new RelMap();
      expect(result).to.be.a.instanceOf(RelMap);
    });
  });
});
