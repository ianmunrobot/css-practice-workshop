const expect = require('chai').expect;
const quixote = require('quixote');
const axios = require('axios');

const findCSSSelector = require('../css.utils').findCSSSelector;

describe('Border', () => {

  let frame;

  before(done => {
    frame = quixote.createFrame({
      stylesheet: '/base/css/border/border.css'
    }, done);
  });

  after(() => {
    frame.remove();
  });

  describe('.single-line-border', () => {
    let backgroundContainer,
        bgDiv;

    beforeEach('add to frame', () => {
      frame.reset();
      backgroundContainer = frame.add(
        `<div id='single-line-border' class='single-line-border'>inner text</div>`
      );
      bgDiv = frame.get('#single-line-border');
    });

    it('has the correct styling', () => {
      let borderStyle = bgDiv.getRawStyle('border-style');
      let borderWidth = bgDiv.getRawStyle('border-width');
      let borderColor = bgDiv.getRawStyle('border-color');
      expect(borderColor).to.be.equal('rgb(0, 0, 255)');
      expect(borderWidth).to.be.equal('2px');
      expect(borderStyle).to.be.equal('dotted');
    });

    it('uses the shorthand one-line border style', () => {
      return axios.get(`/base/css/border/border.css`)
      .then(res => res.data)
      .then(text => findCSSSelector(text, '.single-line-border'))
        .then(style => {
          expect(style).to.not.include('border-style');
          expect(style).to.not.include('border-width');
          expect(style).to.not.include('border-color');
          expect(style).to.include('border:')
        })
    });

  });

});
