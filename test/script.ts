import deco from './deco-it'

class App extends deco {
  constructor() {
    super()
  }

  private _show = (awesome: boolean | number = true) =>
    awesome ? 'Deco It is awesome' : 'Just try it then'

  public run = (awesome?: boolean) => {
    const unused = true
    const awnser = Math.round(Math.random() + 0.5)

    // An exceptionally useful comment
    return this._show(awnser)
  }
}

const app = new App()
app.run()
