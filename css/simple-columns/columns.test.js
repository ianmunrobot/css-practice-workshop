const quixote = require('quixote');
const expect = require('chai').expect;

describe('Columns', () => {
  let frame;

  before('set up iframe', done => {
    frame = quixote.createFrame({
      src: '/base/css/simple-columns/columns.html',
    }, done);
  });

  after(() => {
    frame.remove();
  });

  beforeEach(done => {
    frame.reload(done);
  });

  describe('.col-half', () => {
    let leftCol,
        rightCol;

    beforeEach('get columns', () => {
      leftCol = frame.get('#col-half-left');
      rightCol = frame.get('#col-half-right');
    });

    it('divides the width in half', () => {
      leftCol.assert({
        right: rightCol.left,
      });
    });

  });

  describe('.col-third', () => {
    let leftCol,
        middleCol,
        rightCol;

    beforeEach('get columns', () => {
      leftCol = frame.get('#col-third-left');
      middleCol = frame.get('#col-third-middle');
      rightCol = frame.get('#col-third-right');
    });

    it('divides the width in thirds', () => {

      leftCol.assert({
        right: middleCol.left,
      });
      middleCol.assert({
        right: rightCol.left,
      });

    });

  });

})
