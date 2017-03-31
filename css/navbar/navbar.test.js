const quixote = require('quixote');
const expect = require('chai').expect;

describe('Navbar', () => {
  let frame;

  before(done => {
    frame = quixote.createFrame({
      stylesheet: ['/base/css/normalize.css', '/base/css/navbar/navbar.css'],
      width: 1000,
    }, done);
  });

  after(() => {
    frame.remove();
  });

});