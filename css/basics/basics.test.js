const assert = require('chai').assert;
const quixote = require('quixote');
const secrets = require('./basics.secrets');

describe('Basic CSS Rules', function() {

  var frame;
  var buttonContainer;
  var button;
  var boldContainer;
  var boldSpan;

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
    boldContainer = frame.add(
      `<div><span id='bold-span' class='bold'>I am bold text</span></div>`
    );
    button = frame.get('#button');
    boldSpan = frame.get('#bold-span');
  });

  it('fills its container', () => {
    button.assert({
      width: buttonContainer.width
    });
  });

  it('has a bold text span', () => {
    secrets.boldTest(boldSpan);
  });

});
