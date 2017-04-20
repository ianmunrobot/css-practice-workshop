const quixote = require('quixote');
const expect = require('chai').expect;
const axios = require('axios')
const findCSSSelector = require('../css.utils').findCSSSelector;

describe.only('Navbar', () => {
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

    beforeEach('grab navbar and navbar items', () => {
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

    // in this case, we can't safely simulate click/mouseover events, so we parse the css file itself
    it('displays list items with bright green background on mouseover', () => {
      return axios.get(`/base/css/navbar/navbar.css`)
        .then(res => res.data)
        .then(text => findCSSSelector(text, '.navbar-big li:hover'))
        .then(style => {
          expect(style).to.be.ok;
          let styleTest = /background-color:\s#32cd32/.test(style)
          expect(styleTest).to.be.true;
        });
    });

    it('displays list items with gray background on select', () => {
      return axios.get(`/base/css/navbar/navbar.css`)
        .then(res => res.data)
        .then(text => findCSSSelector(text, '.navbar-big li:active'))
        .then(style => {
          expect(style).to.be.ok;
          let styleTest = /background-color:\s#1e1e1e/.test(style)
          expect(styleTest).to.be.true;
        });
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

  describe('navbar-breadcrumb', () => {
    let navbar,
        navbarItems,
        navbarUl,
        navbarAs;

    beforeEach('grab navbar and navbar items', () => {
      navbar = frame.get('#navbar-breadcrumb');
      navbarUl = frame.get('#navbar-breadcrumb ul');
      navbarItems = frame.getAll('.navbar-breadcrumb li', '.navbar-breadcrumb <li>s');
      navbarAs = frame.getAll('.navbar-breadcrumb a', '.navbar-breadcrumb <a>s')
    });

    it('displays navbar with the correct bg color', () => {
      let color = navbarUl.getRawStyle('background-color');
      let color2 = navbar.getRawStyle('background-color');
      expect([color, color2]).to.include('rgb(16, 163, 167)');
    });

    it('displays list items in a row', () => {
      // assert that all navbar li tops match
      for (let i = 0; i < navbarItems.length(); i++) {
        let current = navbarItems.at(i);
        current.assert({
          top: navbar.top.plus(10)
        });
      }
    });

    it('displays a "/" between each li (but not at the end)', () => {
      let current = navbarItems.at(1);
      for (let i = 0; i < navbarItems.length(); i++) {
        let current = navbarItems.at(i);
        let content = window.getComputedStyle(current.toDomElement(), ':before').getPropertyValue('content');
        if (i === 0) {
          expect(content).to.be.equal('');
        } else {
          expect(content).to.be.equal('"/"');
        }
      }
    });

  });

});