const fs = require('fs');

function findCSSSelector(selector, filepath) {
  let file = fs.readFileSync(filepath).toString();
  let startIndex = file.indexOf(selector);
  if (startIndex === -1) return 'not found'
  let endIndex = file.slice(startIndex).indexOf('}');
  return file.slice(startIndex, endIndex);

}

module.exports = {
  findCSSSelector
};
