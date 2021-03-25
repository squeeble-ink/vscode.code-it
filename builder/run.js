const build = require('./build')

const themes = ['deco-it']

themes.forEach((theme) => {
  build(theme, require(`./${theme}`))
})
