var assert = require('chai').assert;
var quixote = require('quixote');

describe("Basic CSS Rules", function() {

  var frame;
  var container;
  var button;
  var boldContainer;
  var boldSpan;

  before(function(done) {
    frame = quixote.createFrame({
      stylesheet: "/base/css/basics/basics.css"
    }, done);
  });

  after(function() {
    frame.remove();
  });

  beforeEach(function() {
    frame.reset();
    container = frame.add(
      `<div><a id='button' class='button' href='#anything'>button label!</a></div>`
    );
    boldContainer = frame.add(
      `<div><span id='bold-span' class='bold'>I am bold text</span></div>`
    );
    button = frame.get('#button');
    boldSpan = frame.get('#bold-span');
  });

  it('fills its container', function() {
    button.assert({
      width: container.width
    });
  });

  it('has a bold text span', function() {
    assert.equal(boldSpan.getRawStyle('font-weight'), 'bold', 'should be bold');
  })

});