import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route } from 'react-router-dom'

import Navigation from './components/menu'
import Home from './components/home'
import About from './components/about'
import Portfolio from './components/portfolio'
import './App.sass'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div >
        <Navigation />
        <Switch >
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    )
  }
}

export default hot(module)(App)
