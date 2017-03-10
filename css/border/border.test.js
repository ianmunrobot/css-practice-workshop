const quixote = require('quixote');
const axios = require('axios');

const secrets = require('./border.secrets');
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
      secrets.borderStyle(bgDiv)
    });

    it('uses the shorthand one-line border style', () => {
      return axios.get(`/base/css/border/border.css`)
      .then(res => res.data)
      .then(text => findCSSSelector(text, '.single-line-border'))
        .then(secrets.oneLineStyle)
    });

  });

});
