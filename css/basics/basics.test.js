const assert = require('chai').assert;
const quixote = require('quixote');
const axios = require('axios');
const {PORT} = require('../../_server.config')

const secrets = require('./basics.secrets');

describe('Basic CSS Rules', function() {

  let frame,
      buttonContainer,
      button,
      boldSpan,
      blueBackground

  before(done => {
    frame = quixote.createFrame({
      stylesheet: '/base/css/basics/basics.css'
    }, done);
  });

  after(function() {
    frame.remove();
  });

  beforeEach('populate the iframe', () => {
    frame.reset();
    buttonContainer = frame.add(
      `<div><a id='button' class='button' href='#anything'>button label!</a></div>`
    );
    frame.add(
      `<div><span id='bold-span' class='bold'>I am bold text</span></div>`
    );
    frame.add(
      `<div id='blue-bg' class='blue-background'>test text</div>`
    )
    button = frame.get('#button');
    boldSpan = frame.get('#bold-span');
    blueBackground = frame.get('#blue-bg')

  });

  it('fills its container', () => {
    button.assert({
      width: buttonContainer.width
    });
  });

  it('has a bold text span', () => {
    secrets.boldTest(boldSpan);
  });

  it('has a blue background class', () => {
    let bgPath = `http://0.0.0.0:${PORT}/css?path=basics/basics.css&selector=.blue-background`;
    let bgStyle = blueBackground.getRawStyle('background-color');
    secrets.blueBackgoundTest(bgStyle);
    return axios.get(bgPath)
      .then(res => res.data)
      .then(style => {
        assert(style.indexOf('blue') === -1, `does not use the 'blue' keyword`);
      })
  })

});
