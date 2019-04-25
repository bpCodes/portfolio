import React, { PureComponent } from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route } from 'react-router-dom'

import Navigation from './components/menu'
import Home from './components/home'
import About from './components/about'
import Portfolio from './components/portfolio'
import Venta from './components/venta'
import Work from './components/work'
import './App.sass'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects/portfolio" component={Portfolio} />
          <Route exact path="/projects/sistema-venta" component={Venta} />
        </Switch>
      </div>
    )
  }
}

export default hot(module)(App)
