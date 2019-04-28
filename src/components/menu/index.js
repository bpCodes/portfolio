/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react'

import { NavLink } from 'react-router-dom'
import Headroom from 'react-headroom'
import style from './style.sass'
import logo from './logo.png'

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
            <div className={style.logo}>
              <svg
                className={style.svgLogo}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 235.07 234.66">
                <title>Recurso 3</title>
                <g id="Capa_2" data-name="Capa 2">
                  <g id="Capa_1-2" data-name="Capa 1">
                    <path
                      className={style.cls1}
                      d="M143,103.94a80.37,80.37,0,0,0-7.11-22.86l9-4.36a90,90,0,0,1,8,25.7Z"/>
                    <path
                      className={style.cls1}
                      d="M102.82,198.05l-4.39-9A80.89,80.89,0,0,0,143,128.7l9.89,1.52A90.92,90.92,0,0,1,102.82,198.05Z"/>
                    <path
                      className={style.cls1}
                      d="M10,194.19H0C0,193,.16,78.32,0,48.66A13.13,13.13,0,0,1,13.14,35.47h88.1a13,13,0,0,1,6.37,1.65,90.66,90.66,0,0,1,37.22,39.6l-9,4.36A80.67,80.67,0,0,0,102.7,45.83a2.93,2.93,0,0,0-1.46-.36H13.14A3.12,3.12,0,0,0,10,48.61C10.16,78.3,10,193,10,194.19Z"/>
                    <path
                      className={style.cls1}
                      d="M152.84,130.22,143,128.7c.4-2.61.59-20.95,0-24.76l9.89-1.52C153.6,107.37,153.38,126.66,152.84,130.22Z"/>
                    <path
                      className={style.cls1}
                      d="M100.62,198.56H70.28l1-87.2a5,5,0,0,1,5-4.94h.06a5,5,0,0,1,4.94,5.06l-.92,77.08h20.22a5,5,0,0,1,0,10Z"/>
                    <path
                      className={style.cls2}
                      d="M35.34,5h133.3a87.32,87.32,0,0,1,14.52,46.78A82.89,82.89,0,0,1,176.09,86c2.41,1,18.89,10.16,24,14.61a85.71,85.71,0,0,1,29.93,65.16c0,26.16-11.47,48.19-29.92,63.94H40.34V76"/>
                  </g>
                </g>
              </svg>
            </div>
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
              type="button" // onBlur={this.handleHide}
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
