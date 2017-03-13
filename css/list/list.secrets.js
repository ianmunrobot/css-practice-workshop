const expect = require('chai').expect;

module.exports = {
  bodyBg: body => {
    let bodyColor = body.getRawStyle('background-color');
      expect(bodyColor).to.not.be.equal('rgba(0, 0, 0, 0)');
      expect(bodyColor).to.not.be.equal('rgba(255, 255, 255, 1)');
      expect(bodyColor).to.not.be.equal('rgb(255, 255, 255)');
      expect(bodyColor).to.not.be.equal('rgb(0, 0, 0)');
  },

  listPadding: (listItemTop, listItemBottom) => {
    // get top margin of first <li>
      let liTopMargin = parseInt(listItemTop.getRawStyle('margin'), 10);
      // find and parse bottom margin of last <li>
      let liBottomMarginStyle = listItemBottom.getRawStyle('margin').split(' ');
      let liBottomMargin =
        liBottomMarginStyle.length > 2 ?
        parseInt(liBottomMarginStyle[2], 10) :
        parseInt(liBottomMarginStyle[0], 10);
    return {
      liTopMargin: liTopMargin + 10,
      liBottomMargin: liBottomMargin + 10,
    }
  },

  listBgColor: list => {
    let ulColor = list.getRawStyle('background-color');
    expect(ulColor).to.not.be.equal('rgba(0, 0, 0, 0)');
    expect(ulColor).to.not.be.equal('rgb(255, 255, 255)');
    expect(ulColor).to.not.be.equal('rgba(255, 255, 255, 1)');
  },

  liStyle: li => {
    let liStyle = li.getRawStyle('list-style-type');
    expect(liStyle).to.be.equal('none');
  },

  liColor: li => {
    let liColor = li.getRawStyle('color');
    expect(liColor).to.not.be.equal('rgba(0, 0, 0, 0)');
    expect(liColor).to.not.be.equal('rgba(0, 0, 0, 1)');
    expect(liColor).to.not.be.equal('rgb(0, 0, 0)');
  }
}
