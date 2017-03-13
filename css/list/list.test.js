const quixote = require('quixote');
const expect = require('chai').expect;

describe('List', () => {
  let frame,
      list,
      listItem1,
      listItem2;

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

  beforeEach('get elements', () => {
    list = frame.get('#list');
    listItem1 = frame.get('#li-1');
    listItem2 = frame.get('#li-2');
  });

  describe('.list', () => {

    it('is centered on the page', () => {
      list.assert({
        center: frame.page().center
      }, 'list should be centered on the page')
    });

  });

  describe('.list-item', () => {

    it('should have a 10px margin', () => {
      listItem2.assert({
        top: listItem1.bottom.plus(10),
      });
    });

    it('should not display a bullet', () => {
      let liStyle = listItem1.getRawStyle('list-style');
      expect(liStyle).to.be.equal('none outside none');
    })


  });



})
