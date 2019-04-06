import React, { Component } from 'react'

import SubMenu from './subMenu'
import Project from './project'

import style from './style.sass'

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <section className={style.container}>
        <div className={style.project}>
          <Project />
        </div>
        <div className={style.submenu}>
          <SubMenu />
        </div>
      </section>
    )
  }
}

export default Portfolio
