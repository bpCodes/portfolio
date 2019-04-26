import React from 'react'

import { NavLink } from 'react-router-dom'
import Headroom from 'react-headroom'
import style from './style.sass'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.menuToggle = React.createRef()
    this.handleOpenMenu = this.handleOpenMenu.bind(this)
    this.handleHide = this.handleHide.bind(this)
    this.state = {
      isActive: false,
    }
  }

  handleOpenMenu() {
    this.setState({ isActive: !this.state.isActive })
  }

  handleHide(e) {
    if (e && e.relatedTarget) {
      e.relatedTarget.click()
    }
    this.setState({ isActive: false })
  }

  render() {
    let navMenu = style.menu
    const { isActive } = this.state
    if (isActive) {
      navMenu += ' ' + style.navOpen
    }
    return (
      <Headroom className={style.head}>
        <header role="banner">
          <nav role="navigation" className={navMenu}>
            <div className={style.logo}>x</div>
            <ul className={style.list}>
              <li className={style.item}>
                <NavLink activeClassName={style.active} exact to="/">
                  Home
                </NavLink>
              </li>
              <li className={style.item}>
                <NavLink activeClassName={style.active} to="/work">
                  Work
                </NavLink>
              </li>
              <li className={style.item}>
                <NavLink activeClassName={style.active} to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            <button
              type="button"
              onBlur={this.handleHide}
              onClick={this.handleOpenMenu}
              className={style.menu__toggle}
              aria-expanded="false"
              aria-controls="menu">
              <svg
                className={style.menuicon}
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50">
                <title>Toggle Menu</title>
                <g>
                  <line
                    className={style.menuicon__bar}
                    x1="13"
                    y1="16.5"
                    x2="37"
                    y2="16.5"/>
                  <line
                    className={style.menuicon__bar}
                    x1="13"
                    y1="24.5"
                    x2="37"
                    y2="24.5"/>
                  <line
                    className={style.menuicon__bar}
                    x1="13"
                    y1="24.5"
                    x2="37"
                    y2="24.5"/>
                  <line
                    className={style.menuicon__bar}
                    x1="13"
                    y1="32.5"
                    x2="37"
                    y2="32.5"/>
                  <circle
                    className={style.menuicon__circle}
                    r="23"
                    cx="25"
                    cy="25"/>
                </g>
              </svg>
            </button>
          </nav>
        </header>
      </Headroom>
    )
  }
}
const Navigation = () => (
  <header role="banner">
    <nav role="navigation" className={style.menu}>
      <div className={style.logo}>x</div>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink activeClassName={style.active} exact to="/">
            Home
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink activeClassName={style.active} to="/work">
            Work
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink activeClassName={style.active} to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default Menu
