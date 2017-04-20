const quixote = require('quixote');
const expect = require('chai').expect;

describe('Positions', () => {
  let frame;

  before('set up the iframe', done => {
    frame = quixote.createFrame({
      src: '/base/css/positions/positions.html',
      width: 1000,
      height: 600,
    }, done);
  });

  after(() => {
    frame.remove();
  });

  beforeEach(done => {
    frame.reload(done);
  });

  describe('.fixed-left-position', () => {
    let fixedLeftDiv,
        container;

    beforeEach(() => {
      fixedLeftDiv = frame.get('#fixed-left-position-1');
      container = frame.get('#container');
    })

    it('occupies the correct position', () => {
      fixedLeftDiv.assert({
        top: container.top.plus(200),
        left: container.left,
      });
    });

    it('is the correct size', () => {
      fixedLeftDiv.assert({
        width: 200,
        height: 200,
      });
    });

  });

  describe('.center-position', () => {
    let centerDiv,
        container;

    beforeEach(() => {
      centerDiv = frame.get('#center-position-1');
      container = frame.get('#container');
    });

    it('should be centered horizontally', () => {
      centerDiv.assert({
        center: container.center,
      }, '.center-position horizontal middle should match the container middle');
    });

    it('should be centered vertically', () => {
      centerDiv.assert({
        middle: container.middle,
      }, '.center-position vertical middle should match the container middle');
    });

  });

  describe('.top-right', () => {
    let topRightDiv,
        centerDiv;

    beforeEach(() => {
      topRightDiv = frame.get('#top-right-1');
      centerDiv = frame.get('#center-position-1');
    });

    it('displays in the correct position', () => {
      topRightDiv.assert({
        right: centerDiv.right.minus(1),
        top: centerDiv.top.plus(1),
      }, '.top-right should should be flush with top-right corner of the center-position div, plus one pixel for the border');
    });

    it('is not wider than 150px', () => {
      let width = topRightDiv.getRawStyle('width');
      expect(width).to.not.be.greaterThan(150);
      let maxWidth = topRightDiv.getRawStyle('max-width');
      expect(maxWidth).to.equal('150px');
    });

  });

  describe('.bottom-left', () => {
    let bottomLeftDiv,
        centerDiv;

    beforeEach(() => {
      bottomLeftDiv = frame.get('#bottom-left-1');
      centerDiv = frame.get('#center-position-1');
    });

    it('displays in the correct position', () => {
      bottomLeftDiv.assert({
        // 1px is added to each of these assertions to account for borders`
        left: centerDiv.left.plus(1),
        bottom: centerDiv.bottom.minus(1),
      }, '.bottom-left should should be flush with bottom-left corner of the center-position div, plus one pixel for the border');
    });

    it('is not wider than 150px', () => {
      let width = bottomLeftDiv.getRawStyle('width');
      expect(width).to.not.be.greaterThan(150);
      let maxWidth = bottomLeftDiv.getRawStyle('max-width');
      expect(maxWidth).to.equal('150px');
    });

  });

});
