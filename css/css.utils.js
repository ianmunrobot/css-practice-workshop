function findCSSSelector(text, selector) {
  let startIndex = text.indexOf(selector);
    if (startIndex === -1) {
      return ''
    } else {
      let endIndex = startIndex + text.slice(startIndex).indexOf('}') + 1;
      return text.slice(startIndex + selector.length, endIndex);
    }
}

module.exports = {
  findCSSSelector
};
