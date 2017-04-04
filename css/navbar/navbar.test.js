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
        navbarItems,
        navbarUl,
        navbarAs;

    beforeEach('grab navbar', () => {
      navbar = frame.get('#navbar-big');
      navbarUl = frame.get('#navbar-big ul');
      navbarItems = frame.getAll('.navbar-big li', '.navbar-big <li>s');
      navbarAs = frame.getAll('.navbar-big a', '.navbar-big <a>s')
    });

    it('displays navbar ul with gray background', () => {
      let color = navbarUl.getRawStyle('background-color');
      let color2 = navbar.getRawStyle('background-color');
      expect([color, color2]).to.include('rgb(128, 128, 128)');
    });

    it('displays list items with white text', () => {
      for (let i = 0; i < navbarAs.length(); i++) {
        let liColor = navbarAs.at(i).getRawStyle('color');
        expect(liColor).to.be.equal('rgb(255, 255, 255)');
      }
    });

    it('displays list items in a row', () => {
      // assert that all navbar li tops match
      for (let i = 0; i < navbarItems.length(); i++) {
        let current = navbarItems.at(i);
        current.assert({
          top: navbar.top
        });
      }
    });

  });

});