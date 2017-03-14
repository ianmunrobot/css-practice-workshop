const assert = require('chai').assert;
const quixote = require('quixote');
const axios = require('axios');

const secrets = require('./basics.secrets');
const findCSSSelector = require('../css.utils').findCSSSelector;

describe('Basic CSS Rules', () => {

  let frame;

  before(done => {
    frame = quixote.createFrame({
      stylesheet: ['/base/css/normalize.css', '/base/css/basics/basics.css'],
      width: 1000,
    }, done);
  });

  after(() => {
    frame.remove();
  });

  describe('.button full-width class', () => {
    let buttonContainer,
        button;

    beforeEach('add to frame', () => {
      frame.reset();
      buttonContainer = frame.add(
        `<div><a id='button' class='button' href='#anything'>button label!</a></div>`
      );
      button = frame.get('#button');
    });

    it('fills its container', () => {
      button.assert({
        width: buttonContainer.width
      });
    });
  });

  describe('.bold class', () => {
    let boldSpan;

    beforeEach('add to frame', () => {
      frame.reset();
      frame.add(
        `<div><span id='bold-span' class='bold'>I am bold text</span></div>`
      );
      boldSpan = frame.get('#bold-span');
    });

    it('has a bold text span', () => {
      secrets.boldTest(boldSpan);
    });
  });

  describe('.blue-background class', () => {
    let blueBackground;

    beforeEach('add to frame', () => {
      frame.reset();
      frame.add(
        `<div id='blue-bg' class='blue-background'>test text</div>`
      );
      blueBackground = frame.get('#blue-bg');
    });

    it('has a blue background class', () => {
      let bgStyle = blueBackground.getRawStyle('background-color');
      secrets.blueBackgoundTest(bgStyle);
    });

    it(`does not use the 'blue' keyword`, () => {
      return axios.get(`/base/css/basics/basics.css`)
      .then(res => res.data)
      .then(text => findCSSSelector(text, '.blue-background'))
      .then(style => {
          assert(style.indexOf('blue') === -1, `does not use the 'blue' keyword`);
        });
    })

  });

});
