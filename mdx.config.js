const emoji = require('remark-emoji');
// const matter = require('remark-frontmatter');
// function plugin(...args) {
//   console.log('ARGS', args);
//   console.log('DATA', this.data);
// }

module.exports = {
  type: 'yaml',
  marker: '-',
  mdPlugins: [emoji]
  // mdPlugins: [matter, plugin]
};
