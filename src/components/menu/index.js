import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './style.sass'

const Navigation = () => (
  <header>
    <nav className={style.menu}>
      <div className={style.logo}>
        x
      </div>
      <ul className={style.list}>
        <li className={style.item}><NavLink to="/home">Work</NavLink></li>
        <li className={style.item}><NavLink to="/about">About</NavLink></li>
        <li className={style.item}><NavLink to="/name">Playground</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default function Menu() {
  return (
    <Navigation />
  )
}
