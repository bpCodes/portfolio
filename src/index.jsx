import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Routes from './Routes.jsx'

ReactDOM.render(
  <HashRouter>
    <ScrollToTop>
      <Routes />
    </ScrollToTop>
  </HashRouter>,
  document.getElementById('app'),
)
