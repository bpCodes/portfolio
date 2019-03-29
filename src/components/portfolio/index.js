import React, { Component } from 'react'

import SubMenu from './subMenu'
import Project from './project'

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <React.Fragment>
        <Project />
        <SubMenu />
      </React.Fragment>
    )
  }
}

export default Portfolio
