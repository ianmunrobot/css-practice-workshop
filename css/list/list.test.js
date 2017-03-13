const quixote = require('quixote');
const expect = require('chai').expect;

describe('List', () => {
  let frame;

  before('set up iframe', done => {
    frame = quixote.createFrame({
      src: '/base/css/list/list.html',
      // stylesheet: '/base/css/list/list.css',
    }, done);
  });

  after(() => {
    frame.remove();
  });

  beforeEach(done => {
    frame.reload(done);
  });

  describe('body', () => {
    let body;

    beforeEach('get body', () => {
      body = frame.get('body');
    })

    it('should have a non-white and non-black background color', () => {
      let bodyColor = body.getRawStyle('background-color');
      expect(bodyColor).to.not.be.equal('rgba(0, 0, 0, 0)');
      expect(bodyColor).to.not.be.equal('rgba(255, 255, 255, 1)');
      expect(bodyColor).to.not.be.equal('rgb(255, 255, 255)');
      expect(bodyColor).to.not.be.equal('rgb(0, 0, 0)');
    });

  })

  describe('.list', () => {
    let list,
        listItemTop,
        listItemBottom;

    beforeEach('get list', () => {
      list = frame.get('#list');
      listItemTop = frame.get('#li-1');
      listItemBottom = frame.get('#li-5');
    })

    it('is centered on the page', () => {
      list.assert({
        center: frame.page().center
      }, 'list should be centered on the page')
    });

    it('should have a 10px padding at top and bottom', () => {
      // get top margin of first <li>
      let liTopMargin = parseInt(listItemTop.getRawStyle('margin'));
      // find and parse bottom margin of last <li>
      let liBottomMarginStyle = listItemBottom.getRawStyle('margin').split(' ');
      let liBottomMargin = liBottomMarginStyle.length > 2 ?
                            parseInt(liBottomMarginStyle[2]) :
                            parseInt(liBottomMarginStyle[0]);
      list.assert({
        top: listItemTop.top.minus(10 + liTopMargin),
        bottom: listItemBottom.bottom.plus(10 + liBottomMargin),
      });
    });

    it('should have a non-white background color', () => {
      let ulColor = list.getRawStyle('background-color');
      expect(ulColor).to.not.be.equal('rgba(0, 0, 0, 0)');
      expect(ulColor).to.not.be.equal('rgb(255, 255, 255)');
      expect(ulColor).to.not.be.equal('rgba(255, 255, 255, 1)');
    });

  });

  describe('.list-item', () => {
    let listItem1,
        listItem2,
        listItem3;

    beforeEach('get elements', () => {
      listItem1 = frame.get('#li-1');
      listItem2 = frame.get('#li-2');
      listItem3 = frame.get('#li-3');
    });

    it('should have a 10px margin between list items', () => {
      listItem2.assert({
        top: listItem1.bottom.plus(10),
      });
      listItem3.assert({
        top: listItem2.bottom.plus(10),
      });
    });

    it('should not display a bullet', () => {
      let liStyle = listItem1.getRawStyle('list-style');
      expect(liStyle).to.be.equal('none outside none');
    });

    it('should have non-black text', () => {
      let liColor = listItem1.getRawStyle('color');
      expect(liColor).to.not.be.equal('rgba(0, 0, 0, 0)');
      expect(liColor).to.not.be.equal('rgba(0, 0, 0, 1)');
      expect(liColor).to.not.be.equal('rgb(0, 0, 0)');
    });

  });

});
