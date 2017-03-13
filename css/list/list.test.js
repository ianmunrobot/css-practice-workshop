const quixote = require('quixote');
const expect = require('chai').expect;

const secrets = require('./list.secrets.js')

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
      secrets.bodyBg(body);
    });

  })

  describe('.list', () => {
    let list,
        listItemTop,
        listItemBottom;

    beforeEach('get list', () => {
      list = frame.get('#list');
      listItemTop = frame.get('#ul-li-1');
      listItemBottom = frame.get('#ul-li-5');
    })

    it('is centered on the page', () => {
      list.assert({
        center: frame.page().center
      }, 'list should be centered on the page')
    });

    it('should have a 10px padding at top and bottom', () => {
      let margins = secrets.listPadding(listItemTop, listItemTop);
      list.assert({
        top: listItemTop.top.minus(margins.liTopMargin),
        bottom: listItemBottom.bottom.plus(margins.liBottomMargin),
      });
    });

    it('should have a non-white background color', () => {
      secrets.listBgColor(list);
    });

  });

  describe('.list-item', () => {
    let listItem1,
        listItem2,
        listItem3;

    beforeEach('get elements', () => {
      listItem1 = frame.get('#ul-li-1');
      listItem2 = frame.get('#ul-li-2');
      listItem3 = frame.get('#ul-li-3');
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
      secrets.liStyle(listItem1);
      secrets.liStyle(listItem2);
    });

    it('should have non-black text', () => {
      secrets.liColor(listItem1);
      secrets.liColor(listItem2);
    });

  });

});
