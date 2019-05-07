import React, { PureComponent } from 'react'
// import { hot } from 'react-hot-loader'
import { Switch, Route, Redirect } from 'react-router-dom'
import withTracker from './components/helper/withTracker'
import Navigation from './components/menu'
import Home from './components/home'
import About from './components/about'
import Portfolio from './components/portfolio'
import Venta from './components/venta'
import Work from './components/work'
import NoMatch from './components/404'
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
          <Route exact path="/" component={withTracker(Home)} />
          <Route exact path="/work" component={withTracker(Work)} />
          <Route exact path="/about" component={withTracker(About)} />
          <Route
            exact
            path="/projects/portfolio"
            component={withTracker(Portfolio)}/>
          <Route
            exact
            path="/projects/sistema-venta"
            component={withTracker(Venta)}/>
          <Route component={NoMatch}>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App
