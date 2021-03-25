const fs = require('fs');
const generate = require('./theme-base')

function build(name, style) {
  fs.writeFileSync(`./themes/${name}-color-theme.json`, generate(name, style), (error) => {
    if (error) throw error
  })
}

module.exports = build
