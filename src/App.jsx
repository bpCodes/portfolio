import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route } from 'react-router-dom'
import HelloWorld from './components/hello-world'
import NameDescription from './components/NameDescription'
import Navigation from './components/menu'
import About from './components/about'
import style from './App.sass'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Navigation />
        <Switch className= {style.container} >
          <Route
            path="/home"
            render={props => <HelloWorld {...props} title="Hello World"/>}/>
          <Route path="/name" component={NameDescription} />
          <Route path="/about" component={About} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    )
  }
}

export default hot(module)(App)
