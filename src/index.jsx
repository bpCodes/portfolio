import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Routes from './Routes'

ReactDOM.hydrate(
  <HashRouter>
    <ScrollToTop>
      <Routes />
    </ScrollToTop>
  </HashRouter>,
  document.getElementById('app'),
)
export default () => {
  ReactDOM.hydrate(
    <HashRouter>
      <ScrollToTop>
        <Routes />
      </ScrollToTop>
    </HashRouter>,
    document.getElementById('app'),
  )
}
