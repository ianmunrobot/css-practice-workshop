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
    expect(style).to.include('border:')
  },

}
