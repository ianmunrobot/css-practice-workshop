const assert = require('chai').assert;

module.exports = {

  boldTest: node => {
    assert.equal(node.getRawStyle('font-weight'), 'bold', 'should be bold')
  },

  blueBackgoundTest: bgStyle => {
    assert.equal(bgStyle === 'rgb(0, 0, 255)' || bgStyle === 'rgba(0, 0, 255, 0)', true)
  },

}
