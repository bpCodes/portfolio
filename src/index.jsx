import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Routes from './Routes'

ReactDOM.render(
  <HashRouter>
    <ScrollToTop>
      <Routes />
    </ScrollToTop>
  </HashRouter>,
  document.getElementById('app'),
)
