const quixote = require('quixote');
const axios = require('axios');
const expect = require('chai').expect;

const secrets = require('./border.secrets');
const findCSSSelector = require('../css.utils').findCSSSelector;

describe('Border', () => {

  let frame;

  before(done => {
    frame = quixote.createFrame({
      stylesheet: ['/base/css/normalize.css', '/base/css/border/border.css'],
      width: 1000,
    }, done);
  });

  after(() => {
    frame.remove();
  });

  describe('.single-line-border', () => {
    let backgroundContainer,
        borderDiv;

    beforeEach('add to frame', () => {
      frame.reset();
      backgroundContainer = frame.add(
        `<div id='single-line-border' class='single-line-border'>inner text</div>`
      );
      borderDiv = frame.get('#single-line-border');
    });

    it('has the correct styling', () => {
      secrets.borderStyle(borderDiv);
    });

    it('uses the shorthand one-line border style', () => {
      return axios.get(`/base/css/border/border.css`)
        .then(res => res.data)
        .then(text => findCSSSelector(text, '.single-line-border'))
        .then(selector => {
          expect(selector).to.not.be.empty;
          return selector;
        })
        .then(secrets.oneLineStyle);
    });

  });

  describe('.round-border', () => {
    let backgroundContainer,
        borderDiv;

    beforeEach('add to frame', () => {
      frame.reset();
      backgroundContainer = frame.add(
        `<div id='round-border' class='round-border'><p>round border</p></div>`
      );
      borderDiv = frame.get('#round-border');
    });

    it('has the correct styling', () => {
      secrets.roundStyle(borderDiv);
    });

  });

});
