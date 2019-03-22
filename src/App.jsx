import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import HelloWorld from './components/hello-world'
import NameDescription from './components/NameDescription'
import Navigation from './components/menu'
import style from './App.sass'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className= {style.container} >
        
        <Navigation/>
        <NameDescription />
        <HelloWorld title="Hello from React webpack" />
      </div>
    )
  }
}

export default hot(module)(App)
