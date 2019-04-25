import React from 'react'

import { NavLink } from 'react-router-dom'
import Headroom from 'react-headroom'
import style from './style.sass'

const Navigation = () => (
  <header>
    <nav className={style.menu}>
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

export default function Menu() {
  return (
    <Headroom>
      <Navigation />
    </Headroom>
  )
}
