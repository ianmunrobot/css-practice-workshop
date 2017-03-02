const assert = require('chai').assert;

module.exports = {
  boldTest: node => {
    assert.equal(node.getRawStyle('font-weight'), 'bold', 'should be bold')
  }

}
