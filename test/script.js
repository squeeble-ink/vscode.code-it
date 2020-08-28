const deco = require('./deco-it')

class App extends deco {
  constructor() {
    super()
  }

  _show = (awesome = true) =>
    awesome ? 'Deco It is awesome' : 'Just try it then'

  run = (awesome) => {
    const unused = true
    const awnser = Math.round(Math.random() + 0.5)

    // An exceptionally useful comment
    return this._show(awnser)
  }
}

const app = new App()
app.run()
