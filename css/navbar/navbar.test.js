const quixote = require('quixote');
const expect = require('chai').expect;

describe('Navbar', () => {
  let frame;

  before(done => {
    frame = quixote.createFrame({
      src: '/base/css/navbar/navbar.html',
      stylesheet: ['/base/css/normalize.css', '/base/css/navbar/navbar.css'],
      width: 1000,
    }, done);
  });

  after(() => {
    frame.remove();
  });

  beforeEach(done => {
    frame.reload(done);
  });

  describe('navbar-big', () => {
    let navbar,
        navbarItems;

    beforeEach('grab navbar', () => {
      navbar = frame.get('#navbar-big');
      navbarItems = frame.getAll('.navbar-big li', 'navbar-big <li>s');
    });

    it('displays list items in a row', () => {
      for (let i = 0; i < navbarItems.length; i++) {
        let current = navbarItems.at(i);
        current.assert({
          top: navbar.top
        });
      }
    });

  });

});