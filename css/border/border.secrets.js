const expect = require('chai').expect;

module.exports = {

  borderStyle: bgDiv => {
    let borderStyle = bgDiv.getRawStyle('border-style');
    let borderWidth = bgDiv.getRawStyle('border-width');
    let borderColor = bgDiv.getRawStyle('border-color');
    expect(borderColor).to.be.equal('rgb(0, 0, 255)');
    expect(borderWidth).to.be.equal('2px');
    expect(borderStyle).to.be.equal('dotted');
  },

  oneLineStyle: style => {
    expect(style).to.not.include('border-style');
    expect(style).to.not.include('border-width');
    expect(style).to.not.include('border-color');
    expect(style).to.include('border:');
  },

  roundStyle: element => {
    let radiusStyle = element.getRawStyle('border-radius');
    let borderWidth = element.getRawStyle('border-width');
    let borderStyle = element.getRawStyle('border-style');
    let borderColor = element.getRawStyle('border-color');

    expect(radiusStyle).to.any.equal('50%', '50% 50%', '50% 50% 50% 50%');
    expect(borderWidth).to.equal('1px');
    expect(borderStyle).to.equal('solid');
    expect(borderColor).to.any.equal('rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)');
  }

}
